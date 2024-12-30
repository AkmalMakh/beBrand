import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { FIREBASE_API_KEY } from '@env';

const firebaseConfigProduction = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "bebrand-66c17.firebaseapp.com",
  projectId: "bebrand-66c17",
  storageBucket: "bebrand-66c17.firebasestorage.app",
  messagingSenderId: "73663823346",
  appId: "1:73663823346:web:346b9fab72b165f4143f6b",
  measurementId: "G-SZ7TZDLL0E"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfigProduction);
}

const firestore = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {auth, firestore, storage};
export default firebase;
