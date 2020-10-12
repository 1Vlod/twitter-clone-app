import React, {useContext} from "react"
import styled from "styled-components"

import MenuBtn from "./MenuBtn/MenuBtn"

import {CurrentPageContext} from "../../../utils/context"

const StyledMenu = styled.div`
  margin-top: 35px;
`


export default function Menu() {

  const setCurrentPage = useContext(CurrentPageContext)

  return (
    <StyledMenu>
      <MenuBtn first={true} handleClick={() => setCurrentPage("OwnMain")}/>
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