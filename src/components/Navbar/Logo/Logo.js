import React from "react"
import styled from "styled-components"
import LogoPng from "./Logo.png"

const StyledLogo = styled.div`

`

function Logo() {
  return (
    <StyledLogo>
      <img src={LogoPng} alt="Logo"/>
    </StyledLogo>
  )
}

export default Logo;