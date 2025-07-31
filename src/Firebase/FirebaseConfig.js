// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdN6a9oU982OOVSgEctLLb9O6iUValoNo",
  authDomain: "biblioteca-virtual-iush.firebaseapp.com",
  projectId: "biblioteca-virtual-iush",
  storageBucket: "biblioteca-virtual-iush.firebasestorage.app",
  messagingSenderId: "319719818092",
  appId: "1:319719818092:web:563b4abedcbd9c8628e949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore instance
export const db = getFirestore(app);