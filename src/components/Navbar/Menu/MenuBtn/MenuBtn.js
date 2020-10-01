import React from "react"
import styled, {css} from "styled-components"
import ImgWithIndicator from "./ImgWithIndicator/ImgWithIndicator"



const StyledMenuBtn = styled.button`
  display: flex;
  background: none;
  border: 1px solid transparent;
  outline: none;
  color: white;
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

function MenuBtn(props) {
  return (
    <StyledMenuBtn first={props.first}>
      <ImgWithIndicator count={props.count}/>
      <StyledText>Home</StyledText>
    </StyledMenuBtn>
  )
}

export default MenuBtn