// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHV3bhxt_OIT0iqRrt8xGvrDrWVeermiE",
  authDomain: "netflixgpt-79d48.firebaseapp.com",
  projectId: "netflixgpt-79d48",
  storageBucket: "netflixgpt-79d48.firebasestorage.app",
  messagingSenderId: "515564460215",
  appId: "1:515564460215:web:6d4696fc98dc617d431532",
  measurementId: "G-Y33VM049KN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()