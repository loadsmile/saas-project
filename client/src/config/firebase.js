import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW9UgUrFNHS0offB1Hvy3Zl6C7-HnNGZg",
  authDomain: "saas-project1.firebaseapp.com",
  projectId: "saas-project1",
  storageBucket: "saas-project1.firebasestorage.app",
  messagingSenderId: "294931645126",
  appId: "1:294931645126:web:6da25114fd9c4851d80dc7",
  measurementId: "G-0H2GLE0XDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
