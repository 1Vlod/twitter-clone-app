import React from "react"
import styled from "styled-components"
import Navbar from "../Navbar/Navbar"

const StyledTwitter = styled.div`
  width: 1231px;
  height: 2000px;
  color: white;
  margin: 0 auto;
`

function Twitter() {

  return (
    <StyledTwitter>
      <Navbar/>
      
    </StyledTwitter>
  )
}

export default Twitter;