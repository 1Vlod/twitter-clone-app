import React from "react"
import styled from "styled-components"

import SignOutButton from "../Buttons/SignOutButton"
import Widget from "../Widget/Widget"

const StyledUtilities = styled.section`
  margin-left: 22px;
`

const Utilities = () => {

  return (
    <StyledUtilities>
      <Widget/>       
      <SignOutButton />
    </StyledUtilities>
  )
}

export default Utilities