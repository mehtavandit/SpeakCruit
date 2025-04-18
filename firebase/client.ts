// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzb29JL04vdU7PaRvNB--dQq-Ux1MGG-o",
  authDomain: "speakcruit.firebaseapp.com",
  projectId: "speakcruit",
  storageBucket: "speakcruit.firebasestorage.app",
  messagingSenderId: "62181118734",
  appId: "1:62181118734:web:2b2eef2beaa732a940fd5f",
  measurementId: "G-NZZMG82H9B"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
