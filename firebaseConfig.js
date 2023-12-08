import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, set, remove, onChildAdded, onChildRemoved } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,sendEmailVerification,signInWithEmailAndPassword,sendPasswordResetEmail  } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCOLVLNV-dD-kCdgy1W86z6Mvb2Kj2hBVE",
    authDomain: "chat-a-bf2f0.firebaseapp.com",
    databaseURL: "https://chat-a-bf2f0-default-rtdb.firebaseio.com",
    projectId: "chat-a-bf2f0",
    storageBucket: "chat-a-bf2f0.appspot.com",
    messagingSenderId: "977136904094",
    appId: "1:977136904094:web:6b4b4e38970a8d7a42d88f"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
let auth = getAuth()


export {
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    sendPasswordResetEmail
}