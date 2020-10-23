import React, {useContext} from "react"
import styled from "styled-components"

import ButtonsWrapper from "./ButtonsWrapper"

import {CurrentPageContext} from "../../../../utils/context"



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




export default ProfileHeader