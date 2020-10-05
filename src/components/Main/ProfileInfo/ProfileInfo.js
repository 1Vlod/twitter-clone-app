import React from "react"
import styled from "styled-components"
import ProfileTheme from "./ProfileTheme.png"
import ProfileHeader from "./ProfileHeader/ProfileHeader"
import ProfileInfoSm from "../../ProfileInfoSm/ProfileInfoSm"
import ProfileStats from "./ProfileStats/ProfileStats"
const StyledProfileInfo = styled.div`
  border-top: 1px solid ${props => props.theme.line};
  border-bottom: 1px solid ${props => props.theme.line};
  padding-bottom: 10px;
`

const StyledProfileTheme = styled.div `
  background: url(${ProfileTheme});
  width: 597px;
  height: 198px;
`

function ProfileInfo() {

  return(
    <StyledProfileInfo>
      <StyledProfileTheme/>
      <ProfileHeader/>
      <ProfileInfoSm title="Name" subtitle="@Name" ml="15px" mt="-15px"/>
      <ProfileStats/>
    </StyledProfileInfo>

  )
}

export default ProfileInfo