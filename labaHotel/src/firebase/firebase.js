import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8gLq7EW5n_8pmScjGFfmFVv4fjlKB_LU",
  authDomain: "hotel-81b76.firebaseapp.com",
  projectId: "hotel-81b76",
  storageBucket: "hotel-81b76.appspot.com",
  messagingSenderId: "940853113698",
  appId: "1:940853113698:web:cca87e8e4dc0a14632b23b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);

export default app;
