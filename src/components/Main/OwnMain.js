import React, {useContext} from "react"

import Main from "./Main"
import BackPlate from "./BackPlate/BackPlate"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Tweets from "../Tweets/Tweets"
import {CurrentUserContext} from "../../utils/context"

function OwnMain() {
  const twitterUser = useContext(CurrentUserContext)

  return (
    <Main>
      <BackPlate/>
      <ProfileInfo/>
      <Tweets filter={twitterUser.id}/>
    </Main>
  )
}

export default OwnMain