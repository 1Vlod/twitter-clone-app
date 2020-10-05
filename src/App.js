import React from 'react';
import Wrapper from "./components/Wrapper/Wrapper"
import Twitter from "./components/Twitter/Twitter"
import {Context} from "./utils/context"


import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"

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

function App() {

  const [user] = useAuthState(auth)

  return (
    <Wrapper >
      <Context.Provider value={{user, auth}}>
        {user ? <Twitter/> : <SignIn/>}
      </Context.Provider>
    </Wrapper>
  );
}

export default App;

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
  }


  return (
    <button onClick={signInWithGoogle}>Sign in with google</button>
  )
}