import React, {useState, useEffect} from "react"

import Tweet from "../Tweet/Tweet"

import {firestore} from "../../utils/firebase"


function Tweets({filter}) {
  const [posts, setPosts] = useState([])
  

  useEffect(() => {
    firestore.collection("posts").onSnapshot(snapshot =>
      setPosts(snapshot.docs.map(doc => {
        return {
          ...doc.data(),
          postId: doc.id
        }
      }))
    );
  }, [])

  const renderTweets = (posts) => {
    const renderPosts = posts
      .filter(post => {
        if (filter) {
          return post.username === filter
        }

        return true
      })
      .sort((a, b) => b.createTime - a.createTime )
      .map((post) => (
        <Tweet
        key={post.postId}
        {...post}
        />
      ))

    return renderPosts.length > 0 
      ? renderPosts
      : <div>Empty</div>
  }

  return (
    renderTweets(posts) 
  )
}

export default Tweets