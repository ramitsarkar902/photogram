import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDIAGQHXrpH7f_wDpJ2NqeHOMgo8nEMoI0",
  authDomain: "ramit-photogram.firebaseapp.com",
  projectId: "ramit-photogram",
  storageBucket: "ramit-photogram.appspot.com",
  messagingSenderId: "18917361404",
  appId: "1:18917361404:web:21cc3804a5d1c6bc727979",
  measurementId: "G-H91C2PFWSK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
