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
    avatar: user.photoURL,
    subscribeList: [],
    followersCount: 0,
    userTheme: ""
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

      let docRef = firestore.collection("users").doc(user.uid)

      docRef.get().then(function(doc) {

          if (doc.exists) {
              console.log("Document data:", doc.data());

              setTwitterUser({
                ...doc.data(),
                new: false
              })
          } else {
            firestore.collection("users").doc(user.uid).set({...twitterUser, new: false})
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });

    }
  }, [twitterUser, user])



  return (
    <StyledTwitter>
      <CurrentUserContext.Provider value={{twitterUser, setTwitterUser}}>
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