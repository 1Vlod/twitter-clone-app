import React, { useContext } from "react"
import { useDocument, useDocumentData } from "react-firebase-hooks/firestore"

import { CurrentPageContext } from "../../utils/context"
import { firestore } from "../../utils/firebase"

import Tweet from "../Tweet/Tweet"
import Main from "./Main"
import Loader from "../Loader/Loader"
import FormAddComment from "../Forms/FormAddComment"

function OneTweetPage({ }) {
  const { currentPage } = useContext(CurrentPageContext)

  let postDocRef = firestore.collection("posts").doc(currentPage.postID)
  let commentsDocRef = firestore.collection("comments").doc(currentPage.postID)

  const [post, postLoading, postError] = useDocument(postDocRef)
  const [comments, commentsLoading, commentsError] = useDocument(commentsDocRef)
  console.log(comments?.data())
  return (
    <Main>
      {postLoading && <Loader/>}
      {postError && <div>Sorry, error: {JSON.stringify(postError)}</div>}
      {post && (
        <>
          <Tweet {...post.data()} postID={post.id}/>
          <FormAddComment postID={currentPage.postID}/>
        </>
      )}

      

      {commentsLoading && <Loader/>}
      {commentsError && <div>Sorry, error: {JSON.stringify(commentsError)}</div>}
      {comments?.exists && (renderComments(comments.data().comments)) }


    </Main>
  )
}

export default OneTweetPage


function renderComments(comments) {

  return comments
    .sort((a, b) => b.createTime - a.createTime )
    .map((comment, indx) => {
      return (
        <Tweet
          comment={true}
          key={indx}
          {...comment}
        />)
    })
}