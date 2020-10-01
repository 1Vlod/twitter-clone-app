import React from "react"
import styled from "styled-components"

const StyledDefaultButton = styled.button`
  width: 211px;
  height: 50px;
  border-radius: 100px;

  outline: none;
  border: none;
  background: #4BA0EC;

  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;

  margin-top: 37px;
`

function DefaultButton(props) {
  return (
    <StyledDefaultButton alternative={props.alternative} type={props.type}>
      {props.text}
    </StyledDefaultButton>  
  )
}

export default DefaultButton