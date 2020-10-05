import React from "react"
import styled from "styled-components"
import Logo from "./Logo/Logo"
import Menu from "./Menu/Menu"
import DefaultButton from "../Buttons/DefaultButton"

const StyledNavbar = styled.nav`
  padding-top: 15px;
  max-width: 211px;
`

function Navbar() {
  return (
    <StyledNavbar>
      <Logo/>
      <Menu/>
      <DefaultButton>
        Tweet
      </DefaultButton>
    </StyledNavbar>
  )
}

export default Navbar