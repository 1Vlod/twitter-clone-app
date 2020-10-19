import React, {useContext} from "react"
import styled from "styled-components"


import Main from "./Main"
import BackPlate from "./BackPlate/BackPlate"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Tweets from "../Tweets/Tweets"
import {CurrentUserContext, CurrentPageContext} from "../../utils/context"

function OtherUserPage() {
  const {currentPage} = useContext(CurrentPageContext)

  return (
    <Main>
      <BackPlate title={currentPage.userOptions.displayName}/>

      <ProfileInfo 
      userTheme={currentPage.userOptions.userTheme}  
      name={currentPage.userOptions.displayName} 
      id={currentPage.userOptions.username}
      avatar={currentPage.userOptions.avatar}
      />

      <Tweets filter={currentPage.otherUserId}/>
    </Main>
  )
}

export default OtherUserPage