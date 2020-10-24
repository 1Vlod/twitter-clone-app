import React, {useState, useContext} from "react"
import styled from "styled-components"

import DefaultButton from "../Buttons/DefaultButton"

import {firestore} from "../../utils/firebase"
import {CurrentUserContext} from "../../utils/context"

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



function FormAddTweet({handleClose}) {

  const [text, setText] = useState("")
  const [img, setImg] = useState("")
  const {twitterUser} = useContext(CurrentUserContext)


  const handleSubmit = e => {
    e.preventDefault()

    if (text.length > 5 && (img.length == 0 || img.length >= 10)){
      firestore.collection("posts").add({
        avatar: twitterUser.avatar,
        displayName: twitterUser.name,
        text: text.trim(),
        username: twitterUser.id,
        image: img,
        createTime: new Date(),
        userTheme: twitterUser.userTheme,
        createrId: twitterUser.id,
      })

      setText("")
      setImg("")

      handleClose && handleClose()
    }

  }


  return (
    <form onSubmit={handleSubmit}>
      <StyledTextArea 
      onChange={(e) => setText(e.target.value)} 
      value={text}
      maxLength="128"
      placeholder="Write something"/>

      <StyledFooter>
        <StyledImageInput
          onChange={e => setImg(e.target.value)}
          value={img}
          placeholder="Set the image URL here"
        />

        <DefaultButton 
          mt="0"
          width="97px"
          height="39px">
          Tweet
        </DefaultButton>
      </StyledFooter>
    </form>
  )
}


export default FormAddTweet