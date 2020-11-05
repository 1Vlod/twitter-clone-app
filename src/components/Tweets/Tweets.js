import React from "react"
import { useCollection } from 'react-firebase-hooks/firestore';

import Tweet from "../Tweet/Tweet"
import Loader from "../Loader/Loader"

import { firestore } from "../../utils/firebase"


function Tweets({filter, retweets}) {
  let docRef = firestore.collection("posts")

  const [value, loading, error] = useCollection(docRef)

  const renderTweets = (posts) => {
    const renderPosts = posts
      .filter(post => {
        if (Array.isArray(filter)) {

          return filter.includes(post.data().username)
        }

        if (retweets?.includes(post.id)) {
          return true 
        }

        if (filter) {
          return post.data().username === filter
        }
        
        return true
      })
      .sort((a, b) => b.data().createTime - a.data().createTime )
      .map((post) => {
        if (retweets?.includes(post.id)) {
          return (
            <Tweet
              retweeted={true}
              key={post.id}
              {...post.data()}
              postID={post.id}
            />
          )
        }

        return (
          <Tweet
            key={post.id}
            {...post.data()}
            postID={post.id}
          />)
      })
      
    return renderPosts.length > 0 
      ? renderPosts
      : <div>Empty</div>
  }

  return (
    <>
      {loading && <Loader loaderWidth={"599px"}/>}
      {error && <div>Error {JSON.stringify(error)}</div>}
      {value && renderTweets(value.docs)}
    </>
  )
}

export default Tweets