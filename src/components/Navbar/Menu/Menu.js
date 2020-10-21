import React, {useContext} from "react"
import styled from "styled-components"

import MenuBtn from "./MenuBtn/MenuBtn"

import {CurrentPageContext, CurrentUserContext} from "../../../utils/context"
import {firestore} from "../../../utils/firebase"

const StyledMenu = styled.div`
  margin-top: 35px;
`


function Menu() {

  const {setCurrentPage} = useContext(CurrentPageContext)
  const {twitterUser, setTwitterUser} = useContext(CurrentUserContext)

  let docRef = firestore.collection("users").doc(twitterUser.id)

  const addFollower = () => {
    docRef.update({
      followersCount: twitterUser.followersCount + 1
    })

    setTwitterUser({
      ...twitterUser, 
      followersCount: twitterUser.followersCount + 1
    })
  }

  return (
    <StyledMenu>
      <MenuBtn 
      first={true} 
      handleClick={() => setCurrentPage({type: "OwnMain"})}>
        Home
      </MenuBtn>

      <MenuBtn/>
      <MenuBtn count="3"/>
      <MenuBtn/>
      <MenuBtn/>
      <MenuBtn/>

      <MenuBtn handleClick={addFollower}>Profile</MenuBtn>

      <MenuBtn/>
    </StyledMenu>
  )
}

export default Menu