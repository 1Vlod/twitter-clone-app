import React, { useState, useContext } from "react"
import styled from "styled-components"

import AltButton from "../Buttons/AltButton"
import DefaultButton from "../Buttons/DefaultButton"

import { CurrentUserContext } from "../../utils/context"
import { firebase, firestore } from "../../utils/firebase"

const StyledFormChangeTheme = styled.form`
`

const StyledInput = styled.input`
  border: none;
  outline: none;

  width: 70px;
  padding: 0.5rem;
  border-radius: 20px;
`


const FormChangeTheme = () => {
  const { twitterUser } = useContext( CurrentUserContext )
  const [urlTheme, setUrlTheme] = useState("")
  
  const userDocRef = firestore.collection("users").doc(twitterUser.id)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (urlTheme.length > 0) {
      userDocRef.update({
        userTheme: urlTheme
      })

      setUrlTheme("")
    }

  }

  const handleChange = (e) => {
    setUrlTheme(e.target.value)
  }

  const handleClear = (e) => {
    userDocRef.update({
      userTheme: ""
    })
  }

  return (
    <StyledFormChangeTheme onSubmit={handleSubmit}>
      <StyledInput
        name="input" 
        type="text" 
        placeholder="user theme"
        value={urlTheme}
        onChange={handleChange}
      />
      <AltButton width="100px" height="32px" ml="5px">Change</AltButton>
      {twitterUser.userTheme && (<DefaultButton 
        type="circle" 
        danger="danger" 
        width="50px" 
        height="50px"
        ml="5px"
        onClick={handleClear}
        >
          Clear
      </DefaultButton>)}
    </StyledFormChangeTheme>
  )
}

export default FormChangeTheme