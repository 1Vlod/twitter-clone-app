import React from "react"

import Main from "./Main"
import Tweets from "../Tweets/Tweets"
import FormAddTweet from "../Forms/FormAddTweet"



function PostsMain({filter}) {

  return (
    <Main>
      <FormAddTweet/>
      <Tweets filter={filter}/>
    </Main>
  )
}

export default PostsMain