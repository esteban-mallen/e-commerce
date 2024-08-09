// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_API_KEY,
    authDomain: "flower-shop-30f7c.firebaseapp.com",
    databaseURL: "https://flower-shop-30f7c-default-rtdb.firebaseio.com",
    projectId: "flower-shop-30f7c",
    storageBucket: "flower-shop-30f7c.appspot.com",
    messagingSenderId: "802528360410",
    appId: "1:802528360410:web:0d213c1311729a46f2b2e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
