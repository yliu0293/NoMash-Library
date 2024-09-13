// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD-v60S0G9O_OejbpAGf5C6VRgQPG0vWA",
  authDomain: "week7-yugong.firebaseapp.com",
  projectId: "week7-yugong",
  storageBucket: "week7-yugong.appspot.com",
  messagingSenderId: "734221605941",
  appId: "1:734221605941:web:cb4befe0cae9864f12657c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
export default db;
