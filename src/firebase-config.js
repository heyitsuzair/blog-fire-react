// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "bloggar-d3441.firebaseapp.com",
  projectId: "bloggar-d3441",
  storageBucket: "bloggar-d3441.appspot.com",
  messagingSenderId: "296854053711",
  appId: "1:296854053711:web:4ec4408730b375e4155b3a",
};

// Initialize Firebase
//eslint-disable-next-line
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
