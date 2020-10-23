import React, {useContext} from "react"
import styled from "styled-components"

import DefaultButton from "../../../Buttons/DefaultButton"
import AltButton from "../../../Buttons/AltButton"
import UnsubscribeButton from "../../../Buttons/UnsubscribeButton"

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

  let twitterUserDocRef = firestore.collection("users").doc(twitterUser.id)
  let otherUserDocRef = firestore.collection("users").doc(currentPage.otherUserId)

  const handleSubscribe = () => {

    if (!currentPage.otherUserId) {
      return
    }

    if (twitterUser.subscribeList.includes(currentPage.otherUserId)) {
      return 
    }

    twitterUserDocRef.update({
      subscribeList: firebase.firestore.FieldValue.arrayUnion(currentPage.otherUserId)
    })

    otherUserDocRef.update({
      followersCount: firebase.firestore.FieldValue.increment(1)
    })

  } 

  const handleUnsubscribe = () => {
    twitterUserDocRef.update({
      subscribeList: firebase.firestore.FieldValue.arrayRemove(currentPage.otherUserId)
    })

    otherUserDocRef.update({
      followersCount: firebase.firestore.FieldValue.increment(-1)
    })
  }

  const renderSubscribingBtn = () => {
    if (twitterUser.subscribeList.includes(currentPage.otherUserId)) {
      return <UnsubscribeButton width="105px" height="40px" onClick={handleUnsubscribe}>UnFollow</UnsubscribeButton>
    }
    
    return <DefaultButton width="105px" height="40px" onClick={handleSubscribe}>Follow</DefaultButton>
  }

  return (
    <StyledButtonsWrapper>
      <AltButton width="40px" height="40px" type="circle">&hellip;</AltButton>
      <AltButton width="40px" height="40px" type="circle">{bell}</AltButton>
      {renderSubscribingBtn()}
    </StyledButtonsWrapper>
  )
}


export default ButtonsWrapper