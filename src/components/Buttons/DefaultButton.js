import React, {useState} from "react"
import styled, {css} from "styled-components"
import NewTweetModal from "../Modals/NewTweetModal"

const StyledDefaultButton = styled.button`
  width: ${props => props.width || "211px"};
  height: ${props => props.height || "50px"};
  border-radius: 100px;
  transition: all .5s;
  outline: none;
  border: none;
  background: ${props => props.theme.blue};

  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;

  margin-top: ${props => props.mt || "37px"};

  &:hover {
    cursor: pointer;
    opacity: .7;
  }

  &:active {
    cursor: pointer;
    opacity: .3;
  }

  ${props => props.alt && css`
    background: none;
    border: 1px solid ${props => props.theme.blue};
    color: ${props => props.theme.blue};
    line-height: 0;
    &:hover {
      cursor: pointer;
      opacity: .5;
    }
  `}
  ${props => props.type === "circle" && css`border-radius: 50%`}
`

function DefaultButton({handleClick, ...props}) {
  

  return (
    <StyledDefaultButton onClick={handleClick} {...props}>
      {props.children}
    </StyledDefaultButton>  
  )
}

export default DefaultButton