import React, {useState, useContext} from "react"
import ReactDOM from 'react-dom';
import styled from "styled-components"

import ModalWrapper from "./ModalWrapper"
import DefaultButton from "../Buttons/DefaultButton"
import {firestore} from "../../utils/firebase"
import {CurrentUserContext} from "../../utils/context"


const StyledNewTweetModal = styled.div`
  min-width: 300px;
  height: 200px;
  background: ${props => props.theme.background};
  margin-top: 10rem;
  border-radius: 15px;
`
const StyledHeader = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${props => props.theme.line};
`

const StyledClose = styled.span`
  font-size: 24px;
  color: ${props => props.theme.blue};

  &:hover {
    cursor: pointer;
  }
`

const StyledFooter = styled.div`
  padding: 10px;
  border-top: 1px solid ${props => props.theme.line};
  display: flex;
  justify-content: flex-end;
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
        <StyledHeader>
          <StyledClose onClick={handleClose}>&times;</StyledClose>
        </StyledHeader>

        <form>
          <textarea onChange={(e) => setText(e.target.value)} value={text}/>
          <StyledFooter>
            <DefaultButton mt="0" onClick={handleClick}>Tweet</DefaultButton>
          </StyledFooter>
        </form>


      </StyledNewTweetModal>
    </ModalWrapper>),
    document.getElementById("root")
  )
}

export default NewTweetModal