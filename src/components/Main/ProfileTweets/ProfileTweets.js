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
    
    posts.sort((a, b) => b.createTime - a.createTime ).map((post) => (
      <Tweet
      {...post}
      />
    ))
    
  )
}

export default ProfileTweets