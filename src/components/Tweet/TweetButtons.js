import React, { useContext } from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faShare, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'

import { CurrentUserContext } from "../../utils/context"
import { firestore, firebase } from "../../utils/firebase"

const comment = <FontAwesomeIcon icon={faComment} />
const retweet = <FontAwesomeIcon icon={faRetweet} />
const heart = <FontAwesomeIcon icon={faHeart} />
const share = <FontAwesomeIcon icon={faShare} />
const heartSolid = <FontAwesomeIcon icon={faHeartSolid} />


const StyledTweetButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 421px;
  margin-top: 13px;
`

const StyledTweetButton = styled.button`
  min-width: 50px;
  background: none;
  border: none;
  outline: none;
  color: ${props => props.theme.grey};
  font-size: 15px;
  transition: color .5s;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.blue};
  }
`


function TweetButtons({postID, likeCount}) {
  const { twitterUser } = useContext(CurrentUserContext)

  let postDocRef = firestore.collection("posts").doc(postID)
  let twitterUserDocRef = firestore.collection("users").doc(twitterUser.id)

  const handleLike = () => {

    if (isLiked(twitterUser, postID)) {
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

  return (
    <StyledTweetButtons>
      <StyledTweetButton>{comment}</StyledTweetButton>
      <StyledTweetButton>{retweet}</StyledTweetButton>
      <LikeBtn 
        handleLike={handleLike} 
        likeCount={likeCount} 
        postID={postID}
        handleUnLike={handleUnLike}/>
      <StyledTweetButton>{share}</StyledTweetButton>
    </StyledTweetButtons>
  )
}

function LikeBtn({ handleLike, likeCount, postID, handleUnLike }) {
  const { twitterUser } = useContext(CurrentUserContext)

  const renderBtn = () => {
    if (isLiked(twitterUser, postID) ) {
      return <StyledTweetButton onClick={handleUnLike}>{heartSolid} {likeCount}</StyledTweetButton>
    } 
    
    return <StyledTweetButton onClick={handleLike}>{heart} {likeCount}</StyledTweetButton>
  }
  
  return renderBtn()
}


function isLiked(user, id) {
  return user.likedPosts && user.likedPosts.includes(id)
}

export default TweetButtons