import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuOEdfZEBtCRh23TbYjXeoJq_uUEMq_G8",
  authDomain: "react-twitter-b306d.firebaseapp.com",
  projectId: "react-twitter-b306d",
  storageBucket: "react-twitter-b306d.appspot.com",
  messagingSenderId: "472670368573",
  appId: "1:472670368573:web:ce75034cdb3f11b32b4b54"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
