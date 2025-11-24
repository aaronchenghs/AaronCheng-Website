import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  getDocs,
} from "firebase/firestore";
import { uuidv4 } from "@firebase/util";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const database = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(database, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
export const createFeedbackDocument = async (FeedbackName, FeedbackMessage) => {
  const feedbackDocRef = doc(database, "feedback", uuidv4());

  const feedbackSnapshot = await getDoc(feedbackDocRef);
  if (!feedbackSnapshot.exists()) {
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const epoch = dateObj.getTime();
    const date = [year, month, day, epoch];

    try {
      await setDoc(feedbackDocRef, {
        FeedbackName,
        FeedbackMessage,
        date,
      });
    } catch (error) {
      console.log("error creating the feedback", error.message);
    }
  }
  return feedbackDocRef;
};

export const getFeedbackStream = async () => {
  const q = query(collection(database, "feedback"));
  const queryCollection = await getDocs(q);

  const dataArray = [];
  queryCollection.docs.map((doc) => {
    dataArray.push(
      new feedbackDTO(
        doc.data().FeedbackName,
        doc.data().FeedbackMessage,
        doc.data().date
      )
    );
    return true;
  }, {});

  return dataArray;
};

export class feedbackDTO {
  constructor(name, message, date) {
    this.name = name;
    this.message = message;
    this.date = date;
  }

  static formatDate(dateArray) {
    return `${dateArray[0]}/${dateArray[1]}/${dateArray[2]}`;
  }
}
