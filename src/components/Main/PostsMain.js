import React, {Suspense} from "react"

import Main from "./Main"
import Tweets from "../Tweets/Tweets"
import Loader from "../Loader/Loader"

const FormAddTweet = React.lazy(() => import("../Forms/FormAddTweet"))

function PostsMain({filter, retweetedInSubscribe}) {
  console.log(retweetedInSubscribe)
  return (
    <Main>
      <Suspense fallback={<Loader loaderWidth={"599px"} loaderHeight={"110px"}/>}>
        <FormAddTweet/>

      </Suspense>
      <Tweets filter={filter}/>
    </Main>
  )
}

export default PostsMain