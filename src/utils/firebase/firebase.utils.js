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
  apiKey: "AIzaSyALwWzbaZgeh762wvQ7SMbnKfxopuIVf58",
  authDomain: "cheng-website-db.firebaseapp.com",
  projectId: "cheng-website-db",
  storageBucket: "cheng-website-db.appspot.com",
  messagingSenderId: "2045352654",
  appId: "1:2045352654:web:425432764e643c7bcb0e9f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const database = getFirestore();

//userdoc CREATE
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
//feedbackdoc CREATE
export const createFeedbackDocument = async (FeedbackName, FeedbackMessage) => {
  const feedbackDocRef = doc(database, "feedback", uuidv4());

  const feedbackSnapshot = await getDoc(feedbackDocRef);
  if (!feedbackSnapshot.exists()) {
    const createdAt = new Date();

    try {
      await setDoc(feedbackDocRef, {
        FeedbackName,
        FeedbackMessage,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the feedback", error.message);
    }
  }
  return feedbackDocRef;
};

//feedbackdoc GET
export const getFeedbackStream = async () => {
  const q = query(collection(database, "feedback"));
  const queryCollection = await getDocs(q);

  const dataArray = [];
  queryCollection.docs.map((doc) => {
    dataArray.push(
      new feedbackDTO(
        doc.data().FeedbackName,
        doc.data().FeedbackMessage,
        doc.data().createdAt
      )
    );
    return true;
  }, {});

  return dataArray;
};

class feedbackDTO {
  constructor(name, message, date) {
    this.name = name;
    this.message = message;
    this.date = date;
  }
}
