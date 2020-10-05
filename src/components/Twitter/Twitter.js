import React from "react"
import styled from "styled-components"
import Navbar from "../Navbar/Navbar"
import Main from "../Main/Main"
const StyledTwitter = styled.div`
  color: white;
  /* margin: 0 auto; */

  display: flex;
  justify-content: center;
`

function Twitter() {

  return (
    <StyledTwitter>
      <Navbar/>
      <Main/>
    </StyledTwitter>
  )
}

export default Twitter;