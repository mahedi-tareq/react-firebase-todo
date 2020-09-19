import firebase from "firebase/app";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGXcfGfaJh_qp9if3EX3gXM57Zr4iqGCk",
  authDomain: "employeelist-d83d0.firebaseapp.com",
  databaseURL: "https://employeelist-d83d0.firebaseio.com",
  projectId: "employeelist-d83d0",
  storageBucket: "employeelist-d83d0.appspot.com",
  messagingSenderId: "861433134335",
  appId: "1:861433134335:web:f0da2c1e23828ff50ce0ca",
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
