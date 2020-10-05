import React from "react"
import DefaultButton from "./DefaultButton"

function AltButton(props) {
  return (
    <DefaultButton 
    alt="alt"
    {...props}
    />
  ) 
}

export default AltButton