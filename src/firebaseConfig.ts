import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAuBzwXPD0KwrCwYnlTgLn14cCz8UywKGo",
  authDomain: "blog-jose-sousa.firebaseapp.com",
  projectId: "blog-jose-sousa",
  storageBucket: "blog-jose-sousa.firebasestorage.app",
  messagingSenderId: "965810350328",
  appId: "1:965810350328:web:d2a26b8dcc4f3713e0330d",
  measurementId: "G-PEMQ7NSGEW"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);

// Inicializar Firestore (BASE DE DATOS)
export const db = getFirestore(app);
