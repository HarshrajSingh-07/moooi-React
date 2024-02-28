// src/firebase.js
// import FirebaseApp from 'firebase/app'
import { initializeApp } from 'firebase/app';
import 'firebase/auth'; // If you need authentication
import { getAuth } from 'firebase/auth';
import 'firebase/firestore'; // If you need Firestore
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDC8NKNmOQ1PzZ7Q5W414C12rBx7DCq7sc",
  authDomain: "moooi-40ae2.firebaseapp.com",
  projectId: "moooi-40ae2",
  storageBucket: "moooi-40ae2.appspot.com",
  messagingSenderId: "11080636814",
  appId: "1:11080636814:web:43ed3c9df240d0b7b0acdf"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);
const auth = getAuth();
export { db, auth }

