// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaiozCthewu_i-xYy2459U3SveDrSAX7s",
  authDomain: "nexus-df4a3.firebaseapp.com",
  projectId: "nexus-df4a3",
  storageBucket: "nexus-df4a3.appspot.com",
  messagingSenderId: "724290772158",
  appId: "1:724290772158:web:c5741b70e510039a3652ef",
  measurementId: "G-HSYZKXDTW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Get the Auth service

//export { auth };
