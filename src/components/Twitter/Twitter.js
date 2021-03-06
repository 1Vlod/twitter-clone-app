import React, { useState, Suspense } from "react"
import styled from "styled-components"

import Loader from "../Loader/Loader"

import { CurrentUserContext, CurrentPageContext } from "../../utils/context"


const OwnMain = React.lazy(() => import("../Main/OwnMain"))
const OtherUserPage = React.lazy(() => import("../Main/OtherUserPage"))
const ExploreMain = React.lazy(() => import("../Main/ExploreMain"))
const HomeMain = React.lazy(() => import("../Main/HomeMain"))
const OneTweetPage = React.lazy(() => import("../Main/OneTweetPage"))
const Utilities = React.lazy(() => import("../Utilities/Utilities"))
const Navbar = React.lazy(() => import("../Navbar/Navbar"))

const StyledTwitter = styled.div`
  color: white;

  display: flex;
  justify-content: center;
`

function Twitter({ twitterUser }) {
  
  const [currentPage, setCurrentPageInitital] = useState({type: "ExploreMain"})
  
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
          <Suspense fallback={<Loader loaderWidth="211px"/>}>
            <Navbar/>
          </Suspense>
          
      
          <Suspense fallback={<Loader loaderWidth="599px"/>}>
            {currentPage.type === "OwnMain" && <OwnMain/>}
            {currentPage.type === "OtherUserPage" && <OtherUserPage/>}
            {currentPage.type === "HomeMain" && <HomeMain/>}
            {currentPage.type === "ExploreMain" && <ExploreMain/>}
            {currentPage.type === "OneTweetPage" && <OneTweetPage/>}
          </Suspense>

        </CurrentPageContext.Provider>
        <Suspense fallback={<Loader loaderWidth="211px" loaderHeight="80px"/>}>
          <Utilities/>
        </Suspense>
        
        
      </CurrentUserContext.Provider>
    </StyledTwitter>
  )
}


export default Twitter