// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBQEEUs7_diJFFUYHFZUc8a6afYpzI0XZU",
  authDomain: "battleverse-5bbd0.firebaseapp.com",
  projectId: "battleverse-5bbd0",
  storageBucket: "battleverse-5bbd0.firebasestorage.app",
  messagingSenderId: "137521329678",
  appId: "1:137521329678:web:74867fcb44e2a59b406e5f",
  measurementId: "G-3MC6V9H7T0"
};

// Initialize Firebase (singleton pattern)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Services
const db = getFirestore(app);
const storage = getStorage(app);

// Analytics (client-side only check)
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) analytics = getAnalytics(app);
  });
}

export { app, db, storage, analytics };
