import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBVFFUZbLUuVjfz_A-rXov-k5itzu70wE",
  authDomain: "polaweb-c5066.firebaseapp.com",
  projectId: "polaweb-c5066",
  storageBucket: "polaweb-c5066.appspot.com",
  messagingSenderId: "701238706936",
  appId: "1:701238706936:web:d324153e3a38f9e977f10d",
  measurementId: "G-1YEF85BVMW",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const storage = getStorage();

export { db, storage, app };
