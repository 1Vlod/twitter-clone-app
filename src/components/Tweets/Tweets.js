import React, {useState, useEffect} from "react"
import {useCollectionData} from 'react-firebase-hooks/firestore';

import Tweet from "../Tweet/Tweet"

import {firestore} from "../../utils/firebase"


function Tweets({filter}) {
  const [posts, setPosts] = useState([])
  let docRef = firestore.collection("posts")

  const [value, loading, error] = useCollectionData(docRef)  
  console.log(value)
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
        if (Array.isArray(filter)) {
          if (!filter.length) {
            return true 
          }

          return filter.includes(post.username)
        }
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
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error {JSON.stringify(error)}</div>}
      {value && renderTweets(value)}
    </>
    // renderTweets(posts) 
  )
}

export default Tweets