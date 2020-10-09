import React, {useState} from "react"
import styled from "styled-components"
import Logo from "./Logo/Logo"
import Menu from "./Menu/Menu"
import DefaultButton from "../Buttons/DefaultButton"

import NewTweetModal from "../Modals/NewTweetModal"

const StyledNavbar = styled.nav`
  padding-top: 15px;
  max-width: 211px;
`

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  

  return (
    <StyledNavbar>
      <Logo/>
      <Menu/>

      <DefaultButton handleClick={() => setIsOpen(true)}>
        Tweet
      </DefaultButton>

      {isOpen && <NewTweetModal handleClose={() => setIsOpen(false)}/> }
    </StyledNavbar>
  )
}

export default Navbar