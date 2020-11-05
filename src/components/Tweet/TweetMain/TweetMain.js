import React, { useContext } from "react"
import styled from "styled-components"

import ProfileInfoSm from "../../ProfileInfoSm/ProfileInfoSm"
import TweetButtons from "./TweetButtons/TweetButtons"
import DeleteBtn from "./TweetButtons/DeleteBtn/DeleteBtn"

import { CurrentUserContext } from "../../../utils/context" 


const StyledTweetMain = styled.div`
  margin-left: 9px;
  width: 100%;
`
const StyledTweetContent = styled.div`

`

const StyledTweetText = styled.p`
  font-size: 16px;
  margin-top: 0;
  font-weight: 400;
`
const StyledTweetImg = styled.img`
  max-width: 100%;
`

function TweetMain({displayName, username, text, image, createTime, comment, ...btnsData}) {
  const { twitterUser } = useContext(CurrentUserContext)
  
  return (
    <StyledTweetMain>
      <ProfileInfoSm 
        oneLine={true} 
        fz={"16px"} 
        title={displayName} 
        subtitle={username} 
        createTime={createTime}
      />
      
      <StyledTweetContent>
        <StyledTweetText>
          {text}
        </StyledTweetText>

        {image && <StyledTweetImg src={image} alt="Tweet Img"/>}
      </StyledTweetContent>
      {comment && twitterUser.id === username && <DeleteBtn postID={btnsData.postID} comment={comment}/>}
      {!comment && (
        <TweetButtons 
        tweetCreaterId={username}
        deletable={twitterUser.id === username} 
        {...btnsData}/>
      )}
    </StyledTweetMain>
  )
}

export default TweetMain