import React, {useContext} from "react"
import styled from "styled-components"

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import ProfileInfoSm from "../../ProfileInfoSm/ProfileInfoSm"

import {CurrentPageContext} from "../../../utils/context"
import * as pageCreators from "../../../utils/pageTypeCreataors" 


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


function BackPlate({ title}) {
  const {setCurrentPage} =  useContext(CurrentPageContext)

  return (
    <StyledBackPlate>
      <StyledBackBtn onClick={() => setCurrentPage(pageCreators.homeMain())}>
        {arrow}
      </StyledBackBtn>
      <ProfileInfoSm title={title} ml="34px"/>
    </StyledBackPlate>
  )
}



export default BackPlate