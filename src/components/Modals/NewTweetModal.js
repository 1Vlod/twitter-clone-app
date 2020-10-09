import React, {useState, useContext} from "react"
import ReactDOM from 'react-dom';
import styled from "styled-components"

import ModalWrapper from "./ModalWrapper"

import {firestore} from "../../utils/firebase"
import {CurrentUserContext} from "../../utils/context"


const StyledNewTweetModal = styled.div`
  min-width: 300px;
  height: 200px;
  background: #fff;
  margin-top: 10rem;
`

function NewTweetModal({handleClose}) {
  const [text, setText] = useState("")
  const twitterUser = useContext(CurrentUserContext)


  const handleClick = e => {
    e.preventDefault()
    firestore.collection("posts").add({
      avatar: twitterUser.avatar,
      displayName: twitterUser.name,
      text,
      username: twitterUser.name + "4578"
    })


    handleClose()

  }

  return ReactDOM.createPortal(
    (<ModalWrapper>
      <StyledNewTweetModal>

        <form>
          <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
          <input type="submit" onClick={handleClick} value="Tweet"/>
        </form>


        <button onClick={handleClose}>Close</button>
      </StyledNewTweetModal>
    </ModalWrapper>),
    document.getElementById("root")
  )
}

export default NewTweetModal