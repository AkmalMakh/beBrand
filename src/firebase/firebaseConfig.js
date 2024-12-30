import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { FIREBASE_API_KEY } from '@env';

const firebaseConfigProduction = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "bebrand-83e0a.firebaseapp.com",
  projectId: "bebrand-83e0a",
  storageBucket: "bebrand-83e0a.firebasestorage.app",
  messagingSenderId: "428697527024",
  appId: "1:428697527024:web:1f987f3a9b518956809835",
  measurementId: "G-PXFD7GVP78"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfigProduction);
}

const firestore = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {auth, firestore, storage};
export default firebase;
