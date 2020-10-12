import React from "react"
import styled from "styled-components"


const StyledModalCloseWrap = styled.div`
position: relative;
border-radius: 50%;
width: 40px;
height: 40px;
transition: all .5s; 
.leftClose,
.rightClose {
  position: absolute;
  background: ${props => props.theme.blue};
  width: 20px;
  height: 2px;
  top: 50%;
  left: 25%
}

.leftClose {
  transform: rotateZ(45deg);
}
.rightClose {
  transform: rotateZ(-45deg);
}


&:hover {
  cursor: pointer;
  background: rgba(75, 160, 236, .1);
}

&:active {
  background: rgba(75, 160, 236, .3);
}
`

function ModalClose({handleClose}) {

  return (
    <StyledModalCloseWrap onClick={handleClose}>
      <span className="leftClose"></span>
      <span className="rightClose"></span>
    </StyledModalCloseWrap>
  )
}

export default ModalClose