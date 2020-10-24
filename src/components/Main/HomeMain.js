import React, {useContext} from "react"

import PostsMain from "./PostsMain"

import {CurrentUserContext} from "../../utils/context"


function HomeMain({filter}) {
  const {twitterUser} = useContext(CurrentUserContext)

  return <PostsMain filter={twitterUser.subcribeList}/>
}

export default HomeMain