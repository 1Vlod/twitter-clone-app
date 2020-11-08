import React from "react"
import styled from "styled-components"
import { useCollection } from 'react-firebase-hooks/firestore';

import Tweet from "../Tweet/Tweet"
import Loader from "../Loader/Loader"

import { firestore } from "../../utils/firebase"

const StyledEmpty = styled.div`
  font-size: 25px;
  padding-left: 13px;
  border-top: 1px solid ${props => props.theme.line};
`


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
      : <StyledEmpty>No tweets here yet</StyledEmpty>
  }

  return (
    <>
      {loading && <Loader loaderWidth="599px" loaderHeight="200px"/>}
      {error && <div>Error {JSON.stringify(error)}</div>}
      {value && renderTweets(value.docs)}
    </>
  )
}

export default Tweets