import React from "react"
import styled, {css} from "styled-components"
import ImgWithIndicator from "./ImgWithIndicator/ImgWithIndicator"



const StyledMenuBtn = styled.button`
  display: flex;
  background: none;
  outline: none;

  border: 1px solid transparent;
  color: ${props => props.active ? "#4BA0EC" : "white"};

  margin: 0;
  padding: 0;

  &:hover {
    cursor: pointer;

    & span{
      text-decoration: underline;
      text-decoration-color: #4BA0EC;
    }
  }

  ${props => props.first || css`
    margin-top: 37px;
  `}

`

const StyledText = styled.span`
  display: block;

  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  
  margin-left: 21px;
`

function MenuBtn({ first, count, handleClick, children, src, active }) {

  return (
    <StyledMenuBtn first={first} onClick={handleClick} active={active}>
      <ImgWithIndicator count={count} src={src}/>
      <StyledText>{children || "placeholder"}</StyledText>
    </StyledMenuBtn>
  )
}

export default MenuBtn