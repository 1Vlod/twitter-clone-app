import React, { useContext } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import { firestore, firebase } from "../../../../../utils/firebase"
import { CurrentUserContext } from "../../../../../utils/context"
import { includesChecker } from "../../../../../utils/utilsFunctions"
import { StyledTweetButton } from "../TweetButtons"

const heartSolid = <FontAwesomeIcon icon={faHeartSolid} />
const heart = <FontAwesomeIcon icon={faHeart} />


function LikeBtn({ likeCount, postID }) {
  const { twitterUser } = useContext(CurrentUserContext)

  let postDocRef = firestore.collection("posts").doc(postID)
  let twitterUserDocRef = firestore.collection("users").doc(twitterUser.id)

  const handleLike = () => {
    if (includesChecker(twitterUser, postID, "likedPosts")) {
      return
    }

    postDocRef.update({
      likeCount: firebase.firestore.FieldValue.increment(1)
    })

    twitterUserDocRef.update({
      likedPosts: firebase.firestore.FieldValue.arrayUnion(postID)
    })
  }

  const handleUnLike = () => {
    postDocRef.update({
      likeCount: firebase.firestore.FieldValue.increment(-1)
    })

    twitterUserDocRef.update({
      likedPosts: firebase.firestore.FieldValue.arrayRemove(postID)
    })
  }


  const renderBtn = () => {
    if (includesChecker(twitterUser, postID, "likedPosts") ) {
      return <StyledTweetButton onClick={handleUnLike} active={true}>{heartSolid} {likeCount || "0"}</StyledTweetButton>
    } 
    
    return <StyledTweetButton onClick={handleLike}>{heart} {likeCount || "0"}</StyledTweetButton>
  }
  
  return renderBtn()
}

export default LikeBtn