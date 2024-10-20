import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-fffcf.firebaseapp.com",
  projectId: "reactchat-fffcf",
  storageBucket: "reactchat-fffcf.appspot.com",
  messagingSenderId: "911035505084",
  appId: "1:911035505084:web:aec3a8b19e46fbc89333b9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()