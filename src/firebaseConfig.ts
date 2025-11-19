import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-jose-sousa.firebaseapp.com",
  projectId: "blog-jose-sousa",
  storageBucket: "blog-jose-sousa-uploads.appspot.com",   // ← ESTE ES EL NUEVO
  messagingSenderId: "508882820696",
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
