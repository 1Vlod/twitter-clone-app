import React from "react"
import styled, { css } from "styled-components"

import LikeBtn from "./LikeBtn/LikeBtn"
import RetweetBtn from "./RetweetBtn/RetweetBtn"
import CommentBtn from "./CommentBtn/CommentBtn"
import DeleteBtn from "./DeleteBtn/DeleteBtn"


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


function TweetButtons({ postID, likeCount, retweetCount, commentsCount, tweetCreaterId, deletable }) {
  
  return (
    <StyledTweetButtons>
    {deletable && <DeleteBtn postID={postID}/>}
      <CommentBtn
        postID={postID}
        commentsCount={commentsCount}
      />
      <RetweetBtn 
        postID={postID}
        retweetCount={retweetCount}
        tweetCreaterId={tweetCreaterId}
      />
      <LikeBtn 
        likeCount={likeCount} 
        postID={postID}/>
    </StyledTweetButtons>
  )
}

export default TweetButtons



