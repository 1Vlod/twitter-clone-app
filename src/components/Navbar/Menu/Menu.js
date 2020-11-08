import React, {useContext} from "react"
import styled from "styled-components"

import MenuBtn from "./MenuBtn/MenuBtn"

import {CurrentPageContext, CurrentUserContext} from "../../../utils/context"
import {firestore} from "../../../utils/firebase"
import * as pageCreators from "../../../utils/pageTypeCreataors" 

import explore from "./explore.png"
import profile from "./profile.png"

const StyledMenu = styled.div`
  margin-top: 35px;
`


function Menu() {

  const { currentPage, setCurrentPage} = useContext(CurrentPageContext)

  return (
    <StyledMenu>
      <MenuBtn 
      first={true} 
      handleClick={() => setCurrentPage(pageCreators.homeMain())}
      active={currentPage.type === "HomeMain"}>
        Home
      </MenuBtn>

      <MenuBtn 
      handleClick={() => setCurrentPage(pageCreators.exploreMain())}
      src={explore}
      active={currentPage.type === "ExploreMain"}>
        Explore
      </MenuBtn>

      <MenuBtn/>
      <MenuBtn/>
      <MenuBtn/>
      <MenuBtn/>

      <MenuBtn 
      handleClick={() => setCurrentPage(pageCreators.ownMain())}
      src={profile}
      active={currentPage.type === "OwnMain"}>
        Profile
      </MenuBtn>

      <MenuBtn/>
    </StyledMenu>
  )
}

export default Menu