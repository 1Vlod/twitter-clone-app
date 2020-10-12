import React, {useState, useEffect} from "react"
import Tweet from "../../Tweet/Tweet"
import {firestore} from "../../../utils/firebase"

function Tweets() {
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
  return (
    
    posts
      .sort((a, b) => b.createTime - a.createTime )
      .map((post) => (
        <Tweet
        key={post.postId}
        {...post}
        />
      ))
    
  )
}

export default Tweets