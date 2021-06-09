import firebase from "firebase";

// firebase config
// TODO: move to env
const firebaseConfig = {
  apiKey: "AIzaSyBTH2-7uJKbjZ8slbPxaxny5MreXT-djhA",
  authDomain: "codehouse-bysavio.firebaseapp.com",
  projectId: "codehouse-bysavio",
  storageBucket: "codehouse-bysavio.appspot.com",
  messagingSenderId: "924657130605",
  appId: "1:924657130605:web:2004acd9d22ab04d117364",
  measurementId: "G-X6FCVKT31X",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// using db and auth
const auth = firebase.auth;
const db = firebase.firestore();

export { db, auth };
