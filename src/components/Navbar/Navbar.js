import React from "react"
import styled from "styled-components"
import Logo from "./Logo/Logo"
import Menu from "./Menu/Menu"
import DefaultButton from "../Buttons/DefaultButton"

const StyledNavbar = styled.nav`
  padding-top: 15px;
`

function Navbar() {
  return (
    <StyledNavbar>
      <Logo/>
      <Menu/>
      <DefaultButton text="Tweet"/>
    </StyledNavbar>
  )
}

export default Navbar