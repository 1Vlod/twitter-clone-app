import React, {useContext} from "react"
import styled from "styled-components"

import ButtonsWrapper from "./ButtonsWrapper"

import {CurrentPageContext} from "../../../../utils/context"



const StyledProfileHeader = styled.div`
  padding: 10px 13px 0;
  display: flex;
  justify-content: space-between;  

`

const StyledProfilePhoto = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;

  margin-top: ${props => props.mt};
`



function ProfileHeader({avatar, userTheme, admin}) {

  const {currentPage} = useContext(CurrentPageContext)
  return (
    <StyledProfileHeader>
      <StyledProfilePhoto src={avatar} alt="ProfilePhoto" mt={userTheme ? "-71px" : 0}/>
      {currentPage.type === "OtherUserPage" && <ButtonsWrapper admin={admin}/>}
      
    </StyledProfileHeader>
  )
}




export default ProfileHeader