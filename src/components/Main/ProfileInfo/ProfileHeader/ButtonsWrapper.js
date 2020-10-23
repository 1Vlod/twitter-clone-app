import React, {useContext} from "react"
import styled from "styled-components"

import DefaultButton from "../../../Buttons/DefaultButton"
import AltButton from "../../../Buttons/AltButton"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'

import {CurrentPageContext, CurrentUserContext} from "../../../../utils/context"
import {firestore, firebase} from "../../../../utils/firebase"

const bell = <FontAwesomeIcon icon={faBell} swapOpacity/>

const StyledButtonsWrapper = styled.div`
  button {
    margin: 0;
  }
`


function ButtonsWrapper() {

  const {currentPage} = useContext(CurrentPageContext)
  const {twitterUser} = useContext(CurrentUserContext)

  const handleClick = () => {

    if (!currentPage.otherUserId) {
      return
    }

    if (twitterUser.subscribeList.includes(currentPage.otherUserId)) {
      return 
    }

    let twitterUserDocRef = firestore.collection("users").doc(twitterUser.id)
    let otherUserDocRef = firestore.collection("users").doc(currentPage.otherUserId)

    twitterUserDocRef.update({
      subscribeList: firebase.firestore.FieldValue.arrayUnion(currentPage.otherUserId)
    })

    otherUserDocRef.update({
      followersCount: firebase.firestore.FieldValue.increment(1)
    })

  } 

  return (
    <StyledButtonsWrapper>
      <AltButton width="40px" height="40px" type="circle">&hellip;</AltButton>
      <AltButton width="40px" height="40px" type="circle">{bell}</AltButton>
      <DefaultButton width="105px" height="40px" onClick={handleClick}>Following</DefaultButton>
    </StyledButtonsWrapper>
  )
}


export default ButtonsWrapper