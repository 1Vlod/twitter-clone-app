import React, {useState, Suspense} from "react"
import styled from "styled-components"


import Navbar from "../Navbar/Navbar"
import ExploreMain from "../Main/ExploreMain"
import HomeMain from "../Main/HomeMain"
import SignOutButton from "../Buttons/SignOutButton"

import {CurrentUserContext, CurrentPageContext} from "../../utils/context"


const OwnMain = React.lazy(() => import("../Main/OwnMain"))
const OtherUserPage = React.lazy(() => import("../Main/OtherUserPage"))

const StyledTwitter = styled.div`
  color: white;

  display: flex;
  justify-content: center;
`

function Twitter({twitterUser}) {
  
  const [currentPage, setCurrentPageInitital] = useState({type: "HomeMain"})
  
  function setCurrentPage(state) {
    
    if (state.type === "OtherUserPage" && 
      state.otherUserId === twitterUser.id) {

      setCurrentPageInitital({...currentPage, type: "OwnMain"})
      return
    }

    setCurrentPageInitital(state)
  }


  return (
    <StyledTwitter> 
      <CurrentUserContext.Provider value={{twitterUser}}>
        <CurrentPageContext.Provider value={{currentPage, setCurrentPage}}>
          <Navbar/>
        
          <Suspense fallback={<div>Loading...</div>}>
            {currentPage.type === "OwnMain" && <OwnMain/>}
            {currentPage.type === "OtherUserPage" && <OtherUserPage/>}
            {currentPage.type === "HomeMain" && <HomeMain/>}
            {currentPage.type === "ExploreMain" && <ExploreMain/>}
          </Suspense>

        </CurrentPageContext.Provider>

        <SignOutButton/>
        
      </CurrentUserContext.Provider>
    </StyledTwitter>
  )
}


export default Twitter