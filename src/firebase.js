// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyC_T-DUHMX-S0HuF6WAh54RzrH4plxL3AI",
  
    authDomain: "firstproject-13a22.firebaseapp.com",
  
    projectId: "firstproject-13a22",
  
    storageBucket: "firstproject-13a22.firebasestorage.app",
  
    messagingSenderId: "1082975252134",
  
    appId: "1:1082975252134:web:9b1ee7f9bc4d09fc90ce67",
  
    measurementId: "G-W6JFQ021EZ"
  
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };