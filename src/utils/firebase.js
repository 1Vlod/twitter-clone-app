
import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"


firebase.initializeApp({
  apiKey: "AIzaSyCxU_tHeptcYIVpJdIyNLhDBUCkzXSu528",
  authDomain: "twitter-clone-app-634d0.firebaseapp.com",
  databaseURL: "https://twitter-clone-app-634d0.firebaseio.com",
  projectId: "twitter-clone-app-634d0",
  storageBucket: "twitter-clone-app-634d0.appspot.com",
  messagingSenderId: "347301095226",
  appId: "1:347301095226:web:552493dc9bb7f5680c5203"
})


const auth = firebase.auth();
const firestore = firebase.firestore();

export {auth, firestore, firebase}