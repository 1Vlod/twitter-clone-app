import React, {useState, useContext, Suspense} from "react"
import { useDocument } from 'react-firebase-hooks/firestore'

import Loader from "../Loader/Loader"
import Twitter from "./Twitter"

import {firestore} from "../../utils/firebase"
import {firebaseContext} from "../../utils/context"




function TwitterOuter() {
  const {user} = useContext(firebaseContext)
  
  const [twitterUser, setTwitterUser] = useState({
    name: user.displayName,
    id: user.uid,
    new: true,
    avatar: user.photoURL,
    subscribeList: ["M7BWIsFJFbTSYfPIoH1c"],
    followersCount: 0,
    userTheme: ""
  })
  
  let docRef = firestore.doc(`users/${user.uid}`)

  const [otherUser, loading, error] = useDocument(docRef)

  if (!loading && !otherUser.exists) {
    firestore.collection("users").doc(user.uid).set({...twitterUser, new: false})
  }

  return (
    <>
      {loading && <Loader/>}
      {error && <div>Sorry, error: {JSON.stringify(error)}</div>}
      {otherUser?.exists && <Twitter twitterUser={otherUser.data()}/>}
    </>
  )
}



export default TwitterOuter;