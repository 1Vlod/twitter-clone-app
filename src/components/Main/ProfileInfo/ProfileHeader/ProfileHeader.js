import React, {useContext} from "react"
import styled from "styled-components"

import DefaultButton from "../../../Buttons/DefaultButton"
import AltButton from "../../../Buttons/AltButton"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'

import {CurrentUserContext, CurrentPageContext} from "../../../../utils/context"

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
  width: 140px;
  border-radius: 50%;

  margin-top: ${props => props.mt};
`



function ProfileHeader({avatar, userTheme}) {

  const {currentPage} = useContext(CurrentPageContext)

  return (
    <StyledProfileHeader>
      <StyledProfilePhoto src={avatar} alt="ProfilePhoto" mt={userTheme ? "-71px" : 0}/>
      {currentPage.type === "OtherUserPage" && <ButtonsWrapper/>}
      
    </StyledProfileHeader>
  )
}

function ButtonsWrapper() {
  return (
    <StyledButtonsWrapper>
      <AltButton width="40px" height="40px" type="circle">&hellip;</AltButton>
      <AltButton width="40px" height="40px" type="circle">{bell}</AltButton>
      <DefaultButton width="105px" height="40px">Following</DefaultButton>
    </StyledButtonsWrapper>
  )
}


export default ProfileHeader