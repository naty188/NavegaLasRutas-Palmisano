// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "final75910.firebaseapp.com",
  projectId: "final75910",
  storageBucket: "final75910.firebasestorage.app",
  messagingSenderId: "720788130988",
  appId: "1:720788130988:web:7a57fcedf6a45b525ee309"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

