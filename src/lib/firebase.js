// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Firebase config from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "testappmvp-cfa7d.firebaseapp.com",
  projectId: "testappmvp-cfa7d",
  storageBucket: "testappmvp-cfa7d.appspot.com",
  messagingSenderId: "132661562955",
  appId: "1:132661562955:web:bf09b24cdfafcd44ca07ce",
  measurementId: "G-5ZKWMNSXDT"
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Conditionally initialize Analytics in the browser
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, storage, analytics };
