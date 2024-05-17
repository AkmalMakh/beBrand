import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyACuJ7ZUZBgz4-wYz1iOISVwzJ1r5hJ_fM",
  authDomain: "bebrand-c026e.firebaseapp.com",
  projectId: "bebrand-c026e",
  storageBucket: "bebrand-c026e.appspot.com",
  messagingSenderId: "454787406778",
  appId: "1:454787406778:web:7b50cc2f2c4bf8c87f9b83",
  measurementId: "G-4FSL31R0SR"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();
  export default firebase;