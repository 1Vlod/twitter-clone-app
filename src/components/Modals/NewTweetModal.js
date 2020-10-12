import React, {useState, useContext} from "react"
import ReactDOM from 'react-dom';
import styled from "styled-components"

import ModalWrapper from "./ModalWrapper"
import DefaultButton from "../Buttons/DefaultButton"
import ModalClose from "./ModalClose"

import {firestore} from "../../utils/firebase"
import {CurrentUserContext} from "../../utils/context"


const StyledNewTweetModal = styled.div`
  min-width: 400px;
  height: 235px;
  background: ${props => props.theme.background};
  margin-top: 10rem;
  border-radius: 15px;
`
const StyledHeader = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${props => props.theme.line};
`

const StyledFooter = styled.div`
  padding: 10px;
  border-top: 1px solid ${props => props.theme.line};
  display: flex;
  justify-content: space-between;
`

const StyledTextArea = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  background: none;

  color: ${props => props.theme.grey};
  padding: 15px;
  font-size: 15px;
  width: calc(100% - 30px);
  height: 80px;
`
const StyledImageInput = styled.input`
  border: none;
  outline: none;

  border-radius: 20px;
  padding: 0 15px;
  font-size: 15px;
`





function NewTweetModal({handleClose}) {
  const [text, setText] = useState("")
  const [img, setImg] = useState("")
  const twitterUser = useContext(CurrentUserContext)


  const handleClick = e => {
    e.preventDefault()

    firestore.collection("posts").add({
      avatar: twitterUser.avatar,
      displayName: twitterUser.name,
      text: text.trim(),
      username: twitterUser.id,
      image: img,
      createTime: new Date()
    })


    handleClose()

  }

  return ReactDOM.createPortal(
    (<ModalWrapper>
      <StyledNewTweetModal>
        <StyledHeader>
          <ModalClose handleClose={handleClose}/>
        </StyledHeader>

        <form>
          <StyledTextArea 
          onChange={(e) => setText(e.target.value)} 
          value={text}
          maxLength="128"
          placeholder="Write something"/>


          <StyledFooter>
            <StyledImageInput
              onChange={e => setImg(e.target.value)}
              value={img}
              placeholder="Set the image URL here"/>
            <DefaultButton 
              mt="0" 
              onClick={handleClick}
              width="97px"
              height="39px"  
            >Tweet</DefaultButton>
          </StyledFooter>
        </form>


      </StyledNewTweetModal>
    </ModalWrapper>),
    document.getElementById("root")
  )
}

export default NewTweetModal