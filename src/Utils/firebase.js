// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm1lG84Jn9IAvsJmq5paVn92pyesK-Hvc",
  authDomain: "cineflix-proje.firebaseapp.com",
  projectId: "cineflix-proje",
  storageBucket: "cineflix-proje.appspot.com",
  messagingSenderId: "145826297148",
  appId: "1:145826297148:web:2554bf5d9c6303a8e49a39",
  measurementId: "G-9Q0P4RQSBB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
