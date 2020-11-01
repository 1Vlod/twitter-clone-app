import React, {useContext} from "react"

import PostsMain from "./PostsMain"

import {CurrentUserContext} from "../../utils/context"
import {firestore} from "../../utils/firebase"
import { useCollection } from "react-firebase-hooks/firestore"


function HomeMain() {
  const {twitterUser} = useContext(CurrentUserContext)
  
  let docRef = firestore.collection(`users`)
  console.log(useCollection(docRef))
  const [users, loading, error] = useCollection(docRef)

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {users && (
      <PostsMain 
        filter={[...twitterUser.subscribeList, twitterUser.id]} 
        retweetedInSubscribe={users.docs.filter(item => twitterUser.subscribeList.includes(item.id)).map(item => {
          return {
            displayName: item.data().name,
            postsIDs: item.data().retweetedPosts 
          }
        })}
      />)}
    </>
  )
}

export default HomeMain