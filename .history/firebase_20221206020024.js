// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
