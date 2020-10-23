import React from "react"
import DefaultButton from "./DefaultButton"

function UnsubscribeButton(props) {
  return (
    <DefaultButton 
    danger="danger"
    {...props}
    />
  ) 
}

export default UnsubscribeButton