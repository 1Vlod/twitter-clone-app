import React from "react"
import styled, {css} from "styled-components"
import img from "./menuBtnPlaceholder.svg"

const StyledImgWithIndicator = styled.div`
  position: relative;

  & span {
    background: #4BA0EC;
    border-radius: 50%;
    width: 17px;
    height: 17px;
    position: absolute;
    top: -7px;
    right: -5px;
    font-size: 11px;
    line-height: 17px;
  }
`

function ImgWithIndicator(props) {
  console.log(props.count)
  return (
    <StyledImgWithIndicator>
      <img src={img} alt="MenuBtn"/>
      {props.count && (<span>{props.count}</span>)}
    </StyledImgWithIndicator>
  )
}

export default ImgWithIndicator