import React from "react"
import styled from "styled-components"
import BackPlate from "./BackPlate/BackPlate"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import ProfileTweets from "./ProfileTweets/ProfileTweets"

const StyledMain = styled.main`
  max-width: 599px;
  border-left: 1px solid ${props => props.theme.line};
  border-right: 1px solid ${props => props.theme.line};
`

function Main() {
  return (
    <StyledMain>
      <BackPlate/>
      <ProfileInfo/>
      <ProfileTweets/>
    </StyledMain>
  )
}

export default Main