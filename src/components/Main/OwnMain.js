import React, {useContext} from "react"

import Main from "./Main"
import MainInner from "./MainInner/MainInner"


import {CurrentUserContext} from "../../utils/context"

function OwnMain() {
  const {twitterUser} = useContext(CurrentUserContext)

  return (
    <Main>
      <MainInner info={twitterUser}/>
    </Main>
  )
}

export default OwnMain