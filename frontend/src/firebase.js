// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvfCBAvlxWH2aIBdN8YKpeaiNQBO_PY6A",
  authDomain: "wcj-database.firebaseapp.com",
  projectId: "wcj-database",
  storageBucket: "wcj-database.appspot.com", // <-- FIXED small typo here
  messagingSenderId: "539900254274",
  appId: "1:539900254274:web:62d4b9a57e426ce9e0f5db",
  measurementId: "G-FZR5F2GW3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

const auth = getAuth(app)

export { db, auth};
