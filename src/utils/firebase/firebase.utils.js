import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
