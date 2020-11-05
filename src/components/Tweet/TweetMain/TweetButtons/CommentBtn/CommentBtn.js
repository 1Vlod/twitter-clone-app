import React, { useContext } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'

import { firestore, firebase } from "../../../../../utils/firebase"
import { CurrentUserContext, CurrentPageContext } from "../../../../../utils/context"
import { StyledTweetButton } from "../TweetButtons"

const comment = <FontAwesomeIcon icon={faComment} />


function CommentBtn({ postID }) {
  const { twitterUser } = useContext(CurrentUserContext)
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext)

  


  let postDocRef = firestore.collection("posts").doc(postID)
  let twitterUserDocRef = firestore.collection("users").doc(twitterUser.id)

  const handleComment = () => {
    setCurrentPage({
      ...currentPage,
      type: "OneTweetPage",
      postID
    })
  }
  
  return <StyledTweetButton onClick={handleComment}>{comment}</StyledTweetButton>
}

export default CommentBtn