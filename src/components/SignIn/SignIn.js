import React, {useContext} from "react"
import styled from "styled-components"

import {firebaseContext} from "../../utils/context"

import firebase from "firebase/app";
import "firebase/firestore"


const StyledSignIn = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledSignInTitle = styled.h1`
  color: ${props => props.theme.grey};
`
const StyledSignInButton = styled.button`
  outline: none;
  
  font-family: Roboto;

  background: white;
  color: black;
  width: 190px;
  border-radius: 5px;
  border: thin solid #888;
  box-shadow: 1px 1px 1px grey;
  height: 44px;

  transition: all .5s;
  &:hover {
    cursor: pointer;
    opacity: .7;
  }

  &:active {
    opacity: .3;
  }
`


function SignIn(props) {

  const {auth} = useContext(firebaseContext)

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)    
  }


  return (
    <StyledSignIn>
      <StyledSignInTitle>Sorry, authentication is currently only available with google</StyledSignInTitle>
      <StyledSignInButton onClick={signInWithGoogle}>Sign in with google</StyledSignInButton>
    </StyledSignIn>
    
  )
}

export default SignIn