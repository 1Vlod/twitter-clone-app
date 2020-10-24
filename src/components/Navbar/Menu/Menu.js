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

  const {setCurrentPage} = useContext(CurrentPageContext)
  const {twitterUser} = useContext(CurrentUserContext)

  let docRef = firestore.collection("users").doc(twitterUser.id)

  const addFollower = () => {
    docRef.update({
      followersCount: twitterUser.followersCount + 1
    })
  }

  return (
    <StyledMenu>
      <MenuBtn 
      first={true} 
      handleClick={() => setCurrentPage(pageCreators.homeMain())}>
        Home
      </MenuBtn>

      <MenuBtn 
      handleClick={() => setCurrentPage(pageCreators.exploreMain())}
      src={explore}>
        Explore
      </MenuBtn>

      <MenuBtn count="3"/>
      <MenuBtn/>
      <MenuBtn/>
      <MenuBtn/>

      <MenuBtn 
      handleClick={() => setCurrentPage(pageCreators.ownMain())}
      src={profile}>
        Profile
      </MenuBtn>

      <MenuBtn/>
    </StyledMenu>
  )
}

export default Menu