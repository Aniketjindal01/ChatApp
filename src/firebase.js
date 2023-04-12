
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDO1hjJcHts4YzBKJlXFup7XRp7EL8uFSg",
  authDomain: "chat-e915b.firebaseapp.com",
  projectId: "chat-e915b",
  storageBucket: "chat-e915b.appspot.com",
  messagingSenderId: "42974214596",
  appId: "1:42974214596:web:61a0502045f96167010c91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();