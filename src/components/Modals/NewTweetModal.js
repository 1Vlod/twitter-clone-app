import React, {useState, useContext} from "react"
import ReactDOM from 'react-dom';
import styled from "styled-components"

import ModalWrapper from "./ModalWrapper"
import ModalClose from "./ModalClose"
import FormAddTweet from "../Forms/FormAddTweet"




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






function NewTweetModal({handleClose}) {


  return ReactDOM.createPortal(
    (<ModalWrapper>
      <StyledNewTweetModal>
        <StyledHeader>
          <ModalClose handleClose={handleClose}/>
        </StyledHeader>

        <FormAddTweet handleClose={handleClose}/>
        
      </StyledNewTweetModal>
    </ModalWrapper>),
    document.getElementById("root")
  )
}

export default NewTweetModal