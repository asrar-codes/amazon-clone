// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAF_iiBjnlJDGlZZAkJJQekslH8BXhAErY",
  authDomain: "clone-f6807.firebaseapp.com",
  projectId: "clone-f6807",
  storageBucket: "clone-f6807.appspot.com",
  messagingSenderId: "1025397041960",
  appId: "1:1025397041960:web:f3b1892d6b9fc258adfe1d",
  measurementId: "G-1YBLSRZRGK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
