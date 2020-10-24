import React, {useContext} from "react"

import PostsMain from "./PostsMain"

import {CurrentUserContext} from "../../utils/context"


function HomeMain() {
  const {twitterUser} = useContext(CurrentUserContext)

  return <PostsMain filter={[...twitterUser.subscribeList, twitterUser.id]}/>
}

export default HomeMain