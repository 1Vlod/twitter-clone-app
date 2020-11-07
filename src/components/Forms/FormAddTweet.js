import React, { useState, useContext } from "react"
import styled from "styled-components"

import DefaultButton from "../Buttons/DefaultButton"

import { firestore, firebase } from "../../utils/firebase"
import { CurrentUserContext } from "../../utils/context"

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



function FormAddTweet({handleClose, postID = ""}) {

  const [text, setText] = useState("")
  const [img, setImg] = useState("")
  const {twitterUser} = useContext(CurrentUserContext)


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (text.length > 5 && (img.length == 0 || img.length >= 10)) {

      if (postID) {
        let commentDocRef = firestore.collection("comments").doc(postID)
        let postDocRef = firestore.collection("posts").doc(postID)

        const commentID = `f${(~~(Math.random()*1e8)).toString(16)}`
        
        const doc = await commentDocRef.get()
        
        if (doc.exists) {
          commentDocRef.update({
            [commentID]: createPost(twitterUser, text, img, commentID)
          })

        } else {
          commentDocRef.set({
            comments: createPost(twitterUser, text, img)
          })
        }
        
        postDocRef.update({
          commentsCount: firebase.firestore.FieldValue.increment(1)
        })


      } else {
        firestore.collection("posts").add(createPost(twitterUser, text, img))
      }

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
          {postID ? "Comment" : "Tweet"}
        </DefaultButton>
      </StyledFooter>
    </form>
  )
}


export default FormAddTweet

function createPost(twitterUser, text, img, id) {
  return {
    avatar: twitterUser.avatar,
    displayName: twitterUser.name,
    text: text.trim(),
    username: twitterUser.id,
    image: img,
    createTime: new Date(),
    userTheme: twitterUser.userTheme,
    createrId: twitterUser.id,
    commentID: id,
  }
}