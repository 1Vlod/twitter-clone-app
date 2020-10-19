import React, {useContext} from "react"
import styled from "styled-components"
import ProfileHeader from "./ProfileHeader/ProfileHeader"
import ProfileInfoSm from "../../ProfileInfoSm/ProfileInfoSm"
import ProfileStats from "./ProfileStats/ProfileStats"
import {CurrentUserContext} from "../../../utils/context"


const StyledProfileInfo = styled.div`
  border-top: 1px solid ${props => props.theme.line};
  border-bottom: 1px solid ${props => props.theme.line};
  padding-bottom: 10px;
`

const StyledProfileThemeWrapper = styled.div`
  width: 100%;
  max-height: 198px;
  overflow: hidden;
`

const StyledProfileTheme = styled.img `
  width: 100%;
`

function ProfileInfo({userTheme, name, id, avatar}) {

  return(
    <StyledProfileInfo>
      {userTheme && 
      (<StyledProfileThemeWrapper>
        <StyledProfileTheme src={userTheme} alt="profile theme"/>
      </StyledProfileThemeWrapper>)}

      <ProfileHeader avatar={avatar} userTheme={Boolean(userTheme)}/>

      <ProfileInfoSm title={name} subtitle={id} ml="15px" mt="-15px"/>
      
      <ProfileStats/>
    </StyledProfileInfo>

  )
}

export default ProfileInfo