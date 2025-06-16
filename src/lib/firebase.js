// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Firebase config from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "testapp12025.firebaseapp.com",
  projectId: "testapp12025",
  storageBucket: "testapp12025.appspot.com",
  messagingSenderId: "60060353643",
  appId: "1:60060353643:web:42f7fb4cbd9d1b5ee05d2e",
  measurementId: "G-4G2SWF66TG"
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
