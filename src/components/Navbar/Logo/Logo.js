import React, {useContext} from "react"
import styled from "styled-components"

import {CurrentPageContext} from "../../../utils/context"
import * as pageCreators from "../../../utils/pageTypeCreataors" 

import LogoPng from "./Logo.png"

const StyledLogo = styled.div`

`

const StyledLogoImg = styled.img`
  &:hover{
    cursor: pointer;
  }
`

function Logo() {
  const {setCurrentPage} = useContext(CurrentPageContext)

  return (
    <StyledLogo>
      <StyledLogoImg src={LogoPng} alt="Logo" onClick={() => setCurrentPage(pageCreators.homeMain())}/>
    </StyledLogo>
  )
}

export default Logo;