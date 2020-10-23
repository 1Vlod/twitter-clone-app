import React from "react"

import BackPlate from "../BackPlate/BackPlate"
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import Tweets from "../../Tweets/Tweets"

function MainInner({info}) {

  return (
    <>
      <BackPlate title={info.name}/>
      <ProfileInfo 
      userTheme={info.userTheme}  
      name={info.name} 
      id={info.id}
      avatar={info.avatar}
      followersCount={info.followersCount}
      followingCount={info.subscribeList.length}
      />

      <Tweets filter={info.id}/>
    </>
  )
} 

export default MainInner