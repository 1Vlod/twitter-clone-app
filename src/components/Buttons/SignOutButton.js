import React from "react"
import DefaultButton from "./DefaultButton"

import {auth} from "../../utils/firebase"

function SighOutButton(props) {

  return (
    <DefaultButton handleClick={() => auth.signOut()} {...props}>SignOut</DefaultButton>
  )
}

export default SighOutButton