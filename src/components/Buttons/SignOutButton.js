import React from "react"
import DefaultButton from "./DefaultButton"

import {auth} from "../../utils/firebase"

function SighOutButton() {

  return (
    <DefaultButton handleClick={() => auth.signOut()} >SignOut</DefaultButton>
  )
}

export default SighOutButton