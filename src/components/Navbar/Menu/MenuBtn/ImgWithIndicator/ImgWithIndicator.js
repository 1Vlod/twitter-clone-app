import React from "react"
import styled from "styled-components"
import img from "./menuBtnPlaceholder.svg"

const StyledImgWithIndicator = styled.div`
  position: relative;

  & span {
    background: ${props => props.theme.blue};
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
  return (
    <StyledImgWithIndicator>
      <img src={img} alt="MenuBtn"/>
      {props.count && (<span>{props.count}</span>)}
    </StyledImgWithIndicator>
  )
}

export default ImgWithIndicator