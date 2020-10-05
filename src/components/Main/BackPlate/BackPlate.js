import React, {useContext} from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import ProfileInfoSm from "../../ProfileInfoSm/ProfileInfoSm"
import {Context} from "../../../utils/context"

const arrow = <FontAwesomeIcon icon={faArrowLeft} />

const StyledBackPlate = styled.div`
  width: 100%;
  height: 53px;
  padding-left: 22px;

  display: flex;
  align-items: center;
` 

const StyledBackBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  color: ${props => props.theme.blue};

  width: 23px;
  height: 100%;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    opacity: .5;
  }
`

const StyledArrow = styled.span`
  
`

function BackPlate(props) {
  const {auth, user} = useContext(Context)

  console.log("user", user)
  return (
    <StyledBackPlate>
      <StyledBackBtn onClick={() => auth.signOut()} >
        {arrow}
      </StyledBackBtn>
      <ProfileInfoSm title={user.displayName} subtitle="2,006 Tweets" ml="34px"/>
    </StyledBackPlate>
  )
}



export default BackPlate