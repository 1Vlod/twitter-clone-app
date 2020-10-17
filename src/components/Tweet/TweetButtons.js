import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faShare } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'

const comment = <FontAwesomeIcon icon={faComment} />
const retweet = <FontAwesomeIcon icon={faRetweet} />
const heart = <FontAwesomeIcon icon={faHeart} />
const share = <FontAwesomeIcon icon={faShare} />


const StyledTweetButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 421px;
  margin-top: 13px;
`

const StyledTweetButton = styled.button`
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


function TweetButtons() {

  return (
    <StyledTweetButtons>
      <StyledTweetButton>{comment}</StyledTweetButton>
      <StyledTweetButton>{retweet}</StyledTweetButton>
      <StyledTweetButton>{heart} 5</StyledTweetButton>
      <StyledTweetButton>{share}</StyledTweetButton>
    </StyledTweetButtons>
  )
}




export default TweetButtons