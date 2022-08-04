import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCDdnyRPm-WpAo_qq599Fb-FYYbWz_TgQk",
    authDomain: "mobidusk-blog-f995f.firebaseapp.com",
    projectId: "mobidusk-blog-f995f",
    storageBucket: "mobidusk-blog-f995f.appspot.com",
    messagingSenderId: "1006857310444",
    appId: "1:1006857310444:web:081c302548ebcee44ad5c9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
