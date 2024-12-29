// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc5R5_z3cWDoJ8JUdZpE8xC0KtmibGaBI",
  authDomain: "vite-contact-a3e4a.firebaseapp.com",
  projectId: "vite-contact-a3e4a",
  storageBucket: "vite-contact-a3e4a.firebasestorage.app",
  messagingSenderId: "49640280944",
  appId: "1:49640280944:web:126ccc8c4012b3dceef5b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


