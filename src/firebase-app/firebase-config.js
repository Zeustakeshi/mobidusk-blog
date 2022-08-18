import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD2FSrZz7ZbiCUBJBt459iWc55APBML0Qo",
    authDomain: "mobidusk-blog-bba28.firebaseapp.com",
    projectId: "mobidusk-blog-bba28",
    storageBucket: "mobidusk-blog-bba28.appspot.com",
    messagingSenderId: "114165575592",
    appId: "1:114165575592:web:c964b05d63bbf4b3e9b79d",
    measurementId: "G-32ZEY04H8G",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
