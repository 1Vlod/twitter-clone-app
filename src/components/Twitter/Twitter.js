import React, {useState, useContext, useEffect} from "react"
import styled from "styled-components"
import Navbar from "../Navbar/Navbar"
import OwnMain from "../Main/OwnMain"
import PostsMain from "../Main/PostsMain"

import {firestore} from "../../utils/firebase"
import {firebaseContext, CurrentUserContext, CurrentPageContext} from "../../utils/context"


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
          console.log("найдено")
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
    
  }, [])


  

  return (
    <StyledTwitter>
      <CurrentUserContext.Provider value={twitterUser}>
        <CurrentPageContext.Provider value={setCurrentPage}>
          <Navbar/>
        </CurrentPageContext.Provider>
        {currentPage === "OwnMain" && <OwnMain/>}
        {currentPage === "PostsMain" && <PostsMain/>}
      </CurrentUserContext.Provider>
    </StyledTwitter>
  )
}




export default Twitter;