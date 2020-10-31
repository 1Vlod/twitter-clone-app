import React, { useContext } from "react"
import styled, { css } from "styled-components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'

import { CurrentUserContext } from "../../../../utils/context"
import { firestore, firebase } from "../../../../utils/firebase"

import LikeBtn from "./LikeBtn/LikeBtn"
import RetweetBtn from "./RetweetBtn/RetweetBtn"

const comment = <FontAwesomeIcon icon={faComment} />
const share = <FontAwesomeIcon icon={faShare} />


const StyledTweetButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 421px;
  margin-top: 13px;
`

export const StyledTweetButton = styled.button`
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

  ${props => props.active && css`
    color: ${props => props.theme.blue};

    &:hover {
      cursor: pointer;
      color: ${props => props.theme.red};
    }
  `}
`


function TweetButtons({ postID, likeCount, retweetCount, tweetCreaterId }) {
  const { twitterUser } = useContext(CurrentUserContext)

  let postDocRef = firestore.collection("posts").doc(postID)
  let twitterUserDocRef = firestore.collection("users").doc(twitterUser.id)



  return (
    <StyledTweetButtons>
      <StyledTweetButton>{comment}</StyledTweetButton>
      <RetweetBtn 
        postID={postID}
        retweetCount={retweetCount}
        tweetCreaterId={tweetCreaterId}
      />
      <LikeBtn 
        likeCount={likeCount} 
        postID={postID}/>
      <StyledTweetButton>{share}</StyledTweetButton>
    </StyledTweetButtons>
  )
}









export default TweetButtons



