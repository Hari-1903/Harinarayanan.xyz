import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDD05FmzeMWlYhNzCDCpRsj1_qw11kaUtA",
  authDomain: "hari--portfolio.firebaseapp.com",
  projectId: "hari--portfolio",
  storageBucket: "hari--portfolio.appspot.com",
  messagingSenderId: "201541591648",
  appId: "1:201541591648:web:d4faa3a78ae08898911905"
});

var db = firebaseApp.firestore();

export {db};