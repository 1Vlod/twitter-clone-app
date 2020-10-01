import React from "react"
import styled from "styled-components"
import MenuBtn from "./MenuBtn/MenuBtn"

const StyledMenu = styled.div`
  margin-top: 35px;
`


export default function Menu() {
  return (
    <StyledMenu>
      <MenuBtn first={true}/>
      <MenuBtn/>
      <MenuBtn count="3"/>
      <MenuBtn/>
      <MenuBtn/>
      <MenuBtn/>
      <MenuBtn/>
      <MenuBtn/>
    </StyledMenu>
  )
}