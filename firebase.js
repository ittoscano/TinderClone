// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import getAuth from "firebase/auth";
import getFirestore from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKLlAswgMY0lQWvroXOBIpu0c5XHYP--o",
  authDomain: "tinder-2-4f755.firebaseapp.com",
  projectId: "tinder-2-4f755",
  storageBucket: "tinder-2-4f755.appspot.com",
  messagingSenderId: "210913457906",
  appId: "1:210913457906:web:90f6436405316d9016426b",
  measurementId: "G-YBGCSVH3EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();