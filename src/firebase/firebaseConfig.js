import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyACuJ7ZUZBgz4-wYz1iOISVwzJ1r5hJ_fM',
  authDomain: 'bebrand-c026e.firebaseapp.com',
  projectId: 'bebrand-c026e',
  storageBucket: 'bebrand-c026e.appspot.com',
  messagingSenderId: '454787406778',
  appId: '1:454787406778:web:7b50cc2f2c4bf8c87f9b83',
  measurementId: 'G-4FSL31R0SR',
};

const firebaseConfigProduction = {
  apiKey: "AIzaSyDk6BOJrpSMH-nzQALW1yN87xPf3GdP51M",
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
