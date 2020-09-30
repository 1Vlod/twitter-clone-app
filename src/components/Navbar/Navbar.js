import React from "react"
import styled from "styled-components"
import Logo from "../Logo/Logo"
import Menu from "../Menu/Menu"

const StyledNavbar = styled.nav`
  
`

function Navbar() {
  return (
    <StyledNavbar>
      <Logo/>
      <Menu/>
    </StyledNavbar>
  )
}

export default Navbar