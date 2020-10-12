import React from "react"
import styled, {css} from "styled-components"
import {randomColor} from "../../utils/utilsFunctions"
import TweetMain from "./TweetMain"

const StyledTweet = styled.div`
  margin-top: 9px;
  display: flex;
  padding: 0 15px 13px;

  border-bottom: 1px solid ${props => props.theme.line};
`

const StyledUserImage = styled.div`
  height: 49px;
  width: 49px;
  border-radius: 50%;

  background: ${randomColor()};

  & img {
    max-width: 49px;
    border-radius: 50%;
  }


  ${props => props.avatar && css`background: none;`}
`

function Tweet({avatar, ...otherOptions}) {
  return (
    <StyledTweet>
      <StyledUserImage avatar={avatar}>
        {avatar && <img src={avatar} alt="tweet avatar"/>}
      </StyledUserImage>
      <TweetMain {...otherOptions}/>
    </StyledTweet>
  )
}



export default Tweet