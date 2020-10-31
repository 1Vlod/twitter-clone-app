import React from "react"
import styled from "styled-components"

import ProfileInfoSm from "../../ProfileInfoSm/ProfileInfoSm"
import TweetButtons from "./TweetButtons/TweetButtons"


const StyledTweetMain = styled.div`
  margin-left: 9px;
  width: 100%;
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

function TweetMain({displayName, username, text, image, createTime, ...btnsData}) {
  return (
    <StyledTweetMain>
      <ProfileInfoSm 
        oneLine={true} 
        fz={"16px"} 
        title={displayName} 
        subtitle={username} 
        createTime={createTime}
      />
      
      <StyledTweetConent>
        <StyledTweetText>
          {text}
        </StyledTweetText>

        {image && <StyledTweetImg src={image} alt="Tweet Img"/>}
      </StyledTweetConent>


      <TweetButtons tweetCreaterId={username} {...btnsData}/>
    </StyledTweetMain>
  )
}

export default TweetMain