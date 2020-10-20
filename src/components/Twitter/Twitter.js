import React, {useState, useContext, useEffect, Suspense} from "react"
import styled from "styled-components"

import Navbar from "../Navbar/Navbar"
import PostsMain from "../Main/PostsMain"
import SignOutButton from "../Buttons/SignOutButton"

import {firestore} from "../../utils/firebase"
import {firebaseContext, CurrentUserContext, CurrentPageContext} from "../../utils/context"


const OwnMain = React.lazy(() => import("../Main/OwnMain"))
const OtherUserPage = React.lazy(() => import("../Main/OtherUserPage"))

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


  const [currentPage, setCurrentPageInitital] = useState({type: "PostsMain"})
  
  function setCurrentPage(state) {
    
    if (state.type === "OtherUserPage" && 
      state.otherUserId === twitterUser.id) {

        setCurrentPageInitital({...currentPage, type: "OwnMain"})
        return
    }

    setCurrentPageInitital(state)
  }



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
        <CurrentPageContext.Provider value={{currentPage, setCurrentPage}}>
          <Navbar/>
        
          <Suspense fallback={<div>Loading...</div>}>
            {currentPage.type === "OwnMain" && <OwnMain/>}
            {currentPage.type === "PostsMain" && <PostsMain/>}
            {currentPage.type === "OtherUserPage" && <OtherUserPage/>}
          </Suspense>
        </CurrentPageContext.Provider>
        <SignOutButton/>
      </CurrentUserContext.Provider>
    </StyledTwitter>
  )
}




export default Twitter;