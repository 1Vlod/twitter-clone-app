import React, { useContext } from "react"
import { useDocument } from "react-firebase-hooks/firestore"

import { CurrentPageContext } from "../../utils/context"
import { firestore } from "../../utils/firebase"

import Tweet from "../Tweet/Tweet"
import Main from "./Main"
import Loader from "../Loader/Loader"
import FormAddComment from "../Forms/FormAddComment"
import BackPlate from "./BackPlate/BackPlate"

function OneTweetPage({ }) {
  const { currentPage } = useContext(CurrentPageContext)

  let postDocRef = firestore.collection("posts").doc(currentPage.postID)
  let commentsDocRef = firestore.collection("comments").doc(currentPage.postID)

  const [post, postLoading, postError] = useDocument(postDocRef)
  const [comments, commentsLoading, commentsError] = useDocument(commentsDocRef)
  
  return (
    <Main>
      <BackPlate title="Home"/>
      {postLoading && <Loader/>}
      {postError && <div>Sorry, error: {JSON.stringify(postError)}</div>}
      {post && (
        <>
          <Tweet {...post.data()} postID={post.id} borderTop/>
          <FormAddComment postID={currentPage.postID}/>
        </>
      )}

      

      {commentsLoading && <Loader/>}
      {commentsError && <div>Sorry, error: {JSON.stringify(commentsError)}</div>}
      {comments?.exists && (renderComments(comments.data(), currentPage.postID)) }


    </Main>
  )
}

export default OneTweetPage


function renderComments(data, postID) {

  return Object.values(data)
    .sort((a, b) => b.createTime - a.createTime )
    .map(comment => {
      return (
        <Tweet
          comment={comment.commentID}
          key={comment.commentID}
          postID={postID}
          {...comment}
        />)
    })
}