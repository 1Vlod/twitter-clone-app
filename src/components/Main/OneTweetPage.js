import React, { useContext } from "react"
import { useDocument } from "react-firebase-hooks/firestore"

import { CurrentPageContext } from "../../utils/context"
import { firestore } from "../../utils/firebase"

import Tweet from "../Tweet/Tweet"
import Main from "./Main"
import Loader from "../Loader/Loader"


function OneTweetPage({ }) {
  const { currentPage } = useContext(CurrentPageContext)
  let postDocRef = firestore.collection("posts").doc(currentPage.postID)
  const [post, loading, error] = useDocument(postDocRef)
  // let twitterUserDocRef = firestore.collection("users").doc(twitterUser.id)
  console.log(post?.data())
  return (
    <Main>
      {loading && <Loader/>}
      {error && <div>Sorry, error: {JSON.stringify(error)}</div>}
      {post && (<Tweet {...post.data()} postID={post.id}/>) }
    </Main>
  )
}

export default OneTweetPage

 