import React, {useContext} from "react"

import Main from "./Main"
import MainInner from "./MainInner/MainInner"

import BackPlate from "./BackPlate/BackPlate"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Tweets from "../Tweets/Tweets"
import {CurrentUserContext} from "../../utils/context"

function OwnMain() {
  const {twitterUser} = useContext(CurrentUserContext)

  return (
    <Main>
      <MainInner info={twitterUser}/>
    </Main>
  )
}

export default OwnMain