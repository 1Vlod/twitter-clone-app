import React, {useState, useContext, useEffect, Suspense} from "react"
import styled from "styled-components"

import Navbar from "../Navbar/Navbar"
import PostsMain from "../Main/PostsMain"
import SignOutButton from "../Buttons/SignOutButton"

import {firestore} from "../../utils/firebase"
import {firebaseContext, CurrentUserContext, CurrentPageContext} from "../../utils/context"


const OwnMain = React.lazy(() => import("../Main/OwnMain"))

const StyledTwitter = styled.div`
  color: white;

  display: flex;
  justify-content: center;
`

function Twitter() {
  const {user} = useContext(firebaseContext)
  
  const [twitterUser, setTwitterUser] = useState({
    name: user.displayName,
    id: user.uid,
    new: true,
    avatar: user.photoURL
  })


  const [currentPage, setCurrentPage] = useState("PostsMain")

  useEffect(() => {
    if (twitterUser.new) {
      firestore.collection("users").onSnapshot(snapshot => {
        const userFromFb = snapshot.docs.find(doc => doc.data().id === user.uid)
        if (userFromFb) {
          setTwitterUser({
            ...userFromFb.data(),
            new: false
          })
        } else {
          firestore.collection("users").add({...twitterUser, new: false})    
          setTwitterUser({
            ...twitterUser,
            new: false
          })
        } 
      }); 
    }
    
  }, [twitterUser, user])


  

  return (
    <StyledTwitter>
      <CurrentUserContext.Provider value={twitterUser}>
        <CurrentPageContext.Provider value={setCurrentPage}>
          <Navbar/>
        
          <Suspense fallback={<div>Loading...</div>}>
            {currentPage === "OwnMain" && <OwnMain/>}
            {currentPage === "PostsMain" && <PostsMain/>}
          </Suspense>
        </CurrentPageContext.Provider>
        <SignOutButton/>
      </CurrentUserContext.Provider>
    </StyledTwitter>
  )
}




export default Twitter;