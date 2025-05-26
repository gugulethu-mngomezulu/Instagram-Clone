// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyC7-JbuCuwl1dLmpadTrK-j94XeLZckUbw",            
  authDomain: "instagram-clone-63b55.firebaseapp.com",
  projectId: "instagram-clone-63b55",
  storageBucket: "instagram-clone-63b55.firebasestorage.app",
  messagingSenderId: "41528303031",
  appId: "1:41528303031:web:4e0eaa676dba44d8d75c32",
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
