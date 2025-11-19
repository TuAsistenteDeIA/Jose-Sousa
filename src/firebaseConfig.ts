import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "blog-jose-sousa.appspot.com", 
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Inicializar app una sola vez
export const app = initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore(app);

// Storage
export const storage = getStorage(app);
