import React from "react"
import styled from "styled-components"
import {randomColor} from "../../utils/utilsFunctions"
import TweetMain from "./TweetMain"

const StyledTweet = styled.div`
  margin-top: 9px;
  display: flex;
  padding: 0 15px 13px;

  border-bottom: 1px solid ${props => props.theme.line}
`

const StyledUserImage = styled.div`
  height: 49px;
  min-width: 49px;
  border-radius: 50%;

  background: ${randomColor()};
`

function Tweet() {

  return (
    <StyledTweet>
      <StyledUserImage/>
      <TweetMain/>
    </StyledTweet>
  )
}



export default Tweet