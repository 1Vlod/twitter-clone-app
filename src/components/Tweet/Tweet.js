import React, {useContext} from "react"
import styled, {css} from "styled-components"

import {randomColor} from "../../utils/utilsFunctions"
import {CurrentPageContext} from "../../utils/context"

import TweetMain from "./TweetMain/TweetMain"
import RetweetedInfo from "./RetweetedInfo/RetweetedInfo"

const StyledTweet = styled.div`
  margin-top: 9px;
  display: flex;
  padding: 0 15px 13px;

  border-bottom: 1px solid ${props => props.theme.line};
`

const StyledUserImage = styled.div`
  height: 49px;
  min-width: 49px;
  border-radius: 50%;

  background: ${randomColor()};

  & .userImage__avatar {
    width: 49px;
    height: 49px;
    border-radius: 50%;
  }


  ${props => props.avatar && css`background: none;`}
`
const StyledTweetWrapper = styled.div`
  
`


function Tweet({avatar, retweeted, ...otherOptions}) {
  const {currentPage, setCurrentPage} = useContext(CurrentPageContext)

  return (
    <StyledTweetWrapper>
      {retweeted && <RetweetedInfo/>}
      <StyledTweet>
        <StyledUserImage avatar={avatar} onClick={() => setCurrentPage({
          ...currentPage,
          otherUserId: otherOptions.username,
          type: "OtherUserPage",
          displayName: otherOptions.displayName
        })}>
          {avatar && <img src={avatar} alt="tweet avatar" className={"userImage__avatar"}/>}
        </StyledUserImage>

        <TweetMain {...otherOptions}/>
      </StyledTweet>
      
    </StyledTweetWrapper>
    
  )
}



export default Tweet