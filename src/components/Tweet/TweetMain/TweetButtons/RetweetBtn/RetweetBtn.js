import React, { useContext } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRetweet } from "@fortawesome/free-solid-svg-icons"

import { firestore, firebase } from "../../../../../utils/firebase"
import { CurrentUserContext } from "../../../../../utils/context"
import { includesChecker } from "../../../../../utils/utilsFunctions"
import { StyledTweetButton } from "../TweetButtons"

const retweet = <FontAwesomeIcon icon={faRetweet} />


function RetweetBtn({ postID, retweetCount }) {
  const { twitterUser } = useContext(CurrentUserContext)

  let postDocRef = firestore.collection("posts").doc(postID)
  let twitterUserDocRef = firestore.collection("users").doc(twitterUser.id)

  const handleRetweet = () => {
    if (includesChecker(twitterUser, postID, "retweetedPosts") ) {
      return
    } 

    postDocRef.update({
      retweetCount: firebase.firestore.FieldValue.increment(1)
    })

    twitterUserDocRef.update({
      retweetedPosts: firebase.firestore.FieldValue.arrayUnion(postID)
    })
  }

  const handleUnRetweet = () => {
    postDocRef.update({
      retweetCount: firebase.firestore.FieldValue.increment(-1)
    })

    twitterUserDocRef.update({
      retweetedPosts: firebase.firestore.FieldValue.arrayRemove(postID)
    })
  }

  const renderBtn = () => {
    if (includesChecker(twitterUser, postID, "retweetedPosts")) {
      return (
        <StyledTweetButton 
          onClick={handleUnRetweet} 
          active={true}>
            {retweet} {retweetCount || 0} 
        </StyledTweetButton>
      )
    } 
    
    return (
      <StyledTweetButton onClick={handleRetweet}>
        {retweet} {retweetCount || 0} 
      </StyledTweetButton>
    )
  }
  
  return renderBtn()
}

export default RetweetBtn