import React, {useContext} from "react"

import Main from "./Main"
import Tweets from "../Tweets/Tweets"
import FormAddTweet from "../Forms/FormAddTweet"

import {CurrentUserContext} from "../../utils/context"


function PostsMain() {
  const {twitterUser} = useContext(CurrentUserContext)

  return (
    <Main>
      <FormAddTweet/>
      <Tweets filter={twitterUser.subscribeList}/>
    </Main>
  )
}

export default PostsMain