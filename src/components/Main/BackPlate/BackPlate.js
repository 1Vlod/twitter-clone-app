import React, {useContext} from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import ProfileInfoSm from "../../ProfileInfoSm/ProfileInfoSm"

import {CurrentUserContext, CurrentPageContext} from "../../../utils/context"


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


function BackPlate({title}) {
  const twitterUser =  useContext(CurrentUserContext)
  const {setCurrentPage} =  useContext(CurrentPageContext)

  return (
    <StyledBackPlate>
      <StyledBackBtn onClick={() => setCurrentPage({type: "PostsMain"})}>
        {arrow}
      </StyledBackBtn>
      <ProfileInfoSm title={title} subtitle="2,006 Tweets" ml="34px"/>
    </StyledBackPlate>
  )
}



export default BackPlate