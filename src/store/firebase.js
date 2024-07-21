import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBR228Yn59TTqJSb3ScyEg6Uw8G6HtT4Gw",
  authDomain: "tata-1mg-2ea3e.firebaseapp.com",
  projectId: "tata-1mg-2ea3e",
  storageBucket: "tata-1mg-2ea3e.appspot.com",
  messagingSenderId: "320718784076",
  appId: "1:320718784076:web:84017de1bf0581b6b256e9",
  measurementId: "G-HERCN458PL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const myAuth = {
  auth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
}

export {myAuth};
