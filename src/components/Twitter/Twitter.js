import React, {useState, useContext, useEffect} from "react"
import styled from "styled-components"
import Navbar from "../Navbar/Navbar"
import Main from "../Main/Main"
import {firestore} from "../../utils/firebase"
import {firebaseContext, CurrentUserContext} from "../../utils/context"


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

  useEffect(() => {
    if (twitterUser.new) {
      firestore.collection("users").onSnapshot(snapshot => {
        const userFromFb = snapshot.docs.find(doc => doc.data().id == user.uid)
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
        <Navbar/>
        <Main/>
      </CurrentUserContext.Provider>
    </StyledTwitter>
  )
}




export default Twitter;