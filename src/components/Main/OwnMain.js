import React from "react"

import Main from "./Main"
import BackPlate from "./BackPlate/BackPlate"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Tweets from "./ProfileTweets/ProfileTweets"

function OwnMain() {

  return (
    <Main>
      <BackPlate/>
      <ProfileInfo/>
      <Tweets/>
    </Main>
  )
}

export default OwnMain