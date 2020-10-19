import React, {useContext} from "react"
import styled from "styled-components"


import Main from "./Main"
import BackPlate from "./BackPlate/BackPlate"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Tweets from "../Tweets/Tweets"
import {CurrentUserContext, CurrentPageContext} from "../../utils/context"

function OtherUserPage() {
  const {currentPage} = useContext(CurrentPageContext)
  console.log("currentPage", currentPage)
  return (
    <Main>
      <BackPlate/>
      <ProfileInfo/>
      <Tweets filter={currentPage.otherUserId}/>
    </Main>
  )
}

export default OtherUserPage