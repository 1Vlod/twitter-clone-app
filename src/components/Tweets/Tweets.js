import React, {useState, useEffect} from "react"
import {useCollectionData, useCollection} from 'react-firebase-hooks/firestore';

import Tweet from "../Tweet/Tweet"

import {firestore} from "../../utils/firebase"


function Tweets({filter}) {
  const [posts, setPosts] = useState([])
  let docRef = firestore.collection("posts")

  const [value, loading, error] = useCollection(docRef)  
  console.log(value?.docs)
  // useEffect(() => {
  //   firestore.collection("posts").onSnapshot(snapshot =>
  //     setPosts(snapshot.docs.map(doc => {
  //       return {
  //         ...doc.data(),
  //         postId: doc.id
  //       }
  //     }))
  //   );
  // }, [])

  const renderTweets = (posts) => {
    const renderPosts = posts
      .filter(post => {
        if (Array.isArray(filter)) {
          if (!filter.length) {
            return true 
          }

          return filter.includes(post.data().username)
        }
        if (filter) {
          return post.data().username === filter
        }

        return true
      })
      .sort((a, b) => b.data().createTime - a.data().createTime )
      .map((post) => (
        <Tweet
        key={post.id}
        {...post.data()}
        />
      ))
      console.log(renderPosts)
    return renderPosts.length > 0 
      ? renderPosts
      : <div>Empty</div>
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error {JSON.stringify(error)}</div>}
      {value && renderTweets(value.docs)}
    </>
  )
}

export default Tweets