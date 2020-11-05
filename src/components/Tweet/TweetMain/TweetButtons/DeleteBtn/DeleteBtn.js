import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { firestore, firebase } from "../../../../../utils/firebase"
import { StyledTweetButton } from "../TweetButtons"

const trash = <FontAwesomeIcon icon={faTrashAlt} />


function DeleteBtn({ postID, comment = ""}) {

  let postDocRef = firestore.collection("posts").doc(postID)
  let commentsDocRef = firestore.collection("comments").doc(postID)


  const handleDelete = () => {
    if (comment) {
      commentsDocRef.update({
        [comment]: firebase.firestore.FieldValue.delete()
      })

      return
    }
    
    postDocRef.delete()
    commentsDocRef.delete()
  }
  
  return <StyledTweetButton onClick={handleDelete}>{trash}</StyledTweetButton>
}

export default DeleteBtn