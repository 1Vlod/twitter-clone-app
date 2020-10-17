import React from "react"

import Main from "./Main"
import Tweets from "../Tweets/Tweets"
import FormAddTweet from "../Forms/FormAddTweet"



function PostsMain() {

  return (
    <Main>
      <FormAddTweet/>
      <Tweets/>
    </Main>
  )
}

export default PostsMain