import React from "react"
import styled from "styled-components"
import ProfileInfoSm from "../ProfileInfoSm/ProfileInfoSm"
// import TweetImg from "./TweetImg.png"
import TweetButtons from "./TweetButtons"


const StyledTweetMain = styled.div`
  margin-left: 9px;
`
const StyledTweetConent = styled.div`

`

const StyledTweetText = styled.p`
  font-size: 16px;
  margin-top: 0;
  font-weight: 400;
`
const StyledTweetImg = styled.img`
  max-width: 100%;
`

function TweetMain({displayName, username, verified, text, image}) {
  return (
    <StyledTweetMain>
      <ProfileInfoSm oneLine={true} fz={"16px"} title={displayName} subtitle={username}/>
      
      <StyledTweetConent>
        <StyledTweetText>
        {text || `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's: bit.ly/2kvf6yj`}
        </StyledTweetText>

        {image && <StyledTweetImg src={image} alt="Tweet Img"/>}
      </StyledTweetConent>


      <TweetButtons/>
    </StyledTweetMain>
  )
}

export default TweetMain