import React from "react"
import styled from "styled-components"
import DefaultButton from "../../../Buttons/DefaultButton"
import ProfilePhoto from "./ProfilePhoto.png"
import AltButton from "../../../Buttons/AltButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-solid-svg-icons'

const bell = <FontAwesomeIcon icon={faBell} swapOpacity/>


const StyledProfileHeader = styled.div`
  padding: 10px 13px 0;
  display: flex;
  justify-content: space-between;  

  & .ProfilePhoto {
    margin-top: -71px;
  }
`
const StyledButtonsWrapper = styled.div`
  button {
    margin: 0;
  }
`




function ProfileHeader() {
  return (
    <StyledProfileHeader>
      <img src={ProfilePhoto} alt="ProfilePhoto" className="ProfilePhoto"/>
      <StyledButtonsWrapper>
        <AltButton width="40px" height="40px" type="circle">&hellip;</AltButton>
        <AltButton width="40px" height="40px" type="circle">{bell}</AltButton>
        <DefaultButton width="105px" height="40px">Following</DefaultButton>
      </StyledButtonsWrapper>
    </StyledProfileHeader>
  )
}

export default ProfileHeader