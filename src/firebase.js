// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuVNXmbmAxPrnwGuLbDiRs4BSqg4rvGvE",
  authDomain: "cineflix-c6ddd.firebaseapp.com",
  projectId: "cineflix-c6ddd",
  storageBucket: "cineflix-c6ddd.firebasestorage.app",
  messagingSenderId: "234832649427",
  appId: "1:234832649427:web:e455d6b13bdf356eab4826",
  measurementId: "G-6PDJ3V66KC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);











