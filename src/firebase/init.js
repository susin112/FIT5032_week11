// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmQkv4ZBVSPykD3nmHh_3EMWYnhWS18kU",
  authDomain: "week7-susin.firebaseapp.com",
  projectId: "week7-susin",
  storageBucket: "week7-susin.appspot.com",
  messagingSenderId: "1006989965322",
  appId: "1:1006989965322:web:9e704ce7e0f07a771387f3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db