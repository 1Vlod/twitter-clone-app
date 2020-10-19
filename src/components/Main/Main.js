import React from "react"
import styled from "styled-components"


const StyledMain = styled.main`
  width: 599px;
  border-left: 1px solid ${props => props.theme.line};
  border-right: 1px solid ${props => props.theme.line};
`

function Main({children}) {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  )
}

export default Main