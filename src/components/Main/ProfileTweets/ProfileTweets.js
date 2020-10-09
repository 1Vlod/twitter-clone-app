import React, {useState, useEffect} from "react"
// import styled from "styled-components"
import Tweet from "../../Tweet/Tweet"
import {firestore} from "../../../utils/firebase"

function ProfileTweets() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    firestore.collection("posts").onSnapshot(snapshot =>
      setPosts(snapshot.docs.map(doc => doc.data()))
    );
  }, [])

  return (
    posts.map((post) => (
      <Tweet
      displayName={post.displayName}
      username={post.username}
      verified={post.verified}
      text={post.text}
      avatar={post.avatar}
      image={post.image}
      />
    ))
    
  )
}

export default ProfileTweets