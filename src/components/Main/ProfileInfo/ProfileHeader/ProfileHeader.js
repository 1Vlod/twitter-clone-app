import React, {useContext} from "react"
import styled from "styled-components"
import DefaultButton from "../../../Buttons/DefaultButton"
import ProfilePhoto from "./ProfilePhoto.png"
import AltButton from "../../../Buttons/AltButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-solid-svg-icons'
import {CurrentUserContext} from "../../../../utils/context"

const bell = <FontAwesomeIcon icon={faBell} swapOpacity/>


const StyledProfileHeader = styled.div`
  padding: 10px 13px 0;
  display: flex;
  justify-content: space-between;  

`
const StyledButtonsWrapper = styled.div`
  button {
    margin: 0;
  }
`
const StyledProfilePhoto = styled.img`
  max-width: 140px;
  border-radius: 50%;

  margin-top: ${props => props.mt};
`



function ProfileHeader() {

  const twitterUser = useContext(CurrentUserContext)

  return (
    <StyledProfileHeader>
      <StyledProfilePhoto src={twitterUser.avatar} alt="ProfilePhoto" mt={twitterUser.userTheme ? "-71px" : 0}/>
      <StyledButtonsWrapper>
        <AltButton width="40px" height="40px" type="circle">&hellip;</AltButton>
        <AltButton width="40px" height="40px" type="circle">{bell}</AltButton>
        <DefaultButton width="105px" height="40px">Following</DefaultButton>
      </StyledButtonsWrapper>
    </StyledProfileHeader>
  )
}

export default ProfileHeader