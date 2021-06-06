import firebase from "firebase";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyBTH2-7uJKbjZ8slbPxaxny5MreXT-djhA",
  authDomain: "codehouse-bysavio.firebaseapp.com",
  projectId: "codehouse-bysavio",
  storageBucket: "codehouse-bysavio.appspot.com",
  messagingSenderId: "924657130605",
  appId: "1:924657130605:web:2004acd9d22ab04d117364",
  measurementId: "G-X6FCVKT31X",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
firebase.analytics();

export { db, auth };
