import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: "reactchat-fffcf.firebaseapp.com",
//   projectId: "reactchat-fffcf",
//   storageBucket: "reactchat-fffcf.appspot.com",
//   messagingSenderId: "911035505084",
//   appId: "1:911035505084:web:aec3a8b19e46fbc89333b9"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth()
// export const db = getFirestore()
// export const storage = getStorage()

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-64404.firebaseapp.com",
  projectId: "react-chat-64404",
  storageBucket: "react-chat-64404.firebasestorage.app",
  messagingSenderId: "1020611457422",
  appId: "1:1020611457422:web:b2b25c0bd9be224f3274df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()