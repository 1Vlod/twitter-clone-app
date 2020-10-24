import React, {useContext} from "react"
import styled, {css} from "styled-components"

import {randomColor} from "../../utils/utilsFunctions"
import {CurrentPageContext} from "../../utils/context"

import TweetMain from "./TweetMain"



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

function Tweet({avatar, ...otherOptions}) {
  const {currentPage, setCurrentPage} = useContext(CurrentPageContext)

  return (
    <StyledTweet>

      <StyledUserImage avatar={avatar} onClick={() => setCurrentPage({
        ...currentPage,
        otherUserId: otherOptions.username,
        type: "OtherUserPage"
      })}>
        {avatar && <img src={avatar} alt="tweet avatar" className={"userImage__avatar"}/>}
      </StyledUserImage>

      <TweetMain {...otherOptions}/>

    </StyledTweet>
  )
}



export default Tweet