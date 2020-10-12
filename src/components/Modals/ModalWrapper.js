import React from "react"
import styled from "styled-components"

const StyledModalWrapper = styled.div`
  background: rgba(0, 0, 0, .5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 10;
`

function ModalWrapper({children}) {
  return (
    <StyledModalWrapper>
      {children}
    </StyledModalWrapper>
  )
}


export default ModalWrapper