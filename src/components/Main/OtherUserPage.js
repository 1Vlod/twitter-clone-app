import React, {useContext} from "react"
import { useDocument } from 'react-firebase-hooks/firestore'

import Main from "./Main"
import MainInner from "./MainInner/MainInner"

import {CurrentPageContext} from "../../utils/context"
import {firestore} from "../../utils/firebase"

function OtherUserPage() {

  const {currentPage} = useContext(CurrentPageContext)

  let docRef = firestore.doc(`users/${currentPage.otherUserId || "unknow"}`)

  const [otherUser, loading, error] = useDocument(docRef)

  return (
    <Main>
      {loading && <div>Loading...</div>}
      {error && <div>Sorry, error: {JSON.stringify(error)}</div>}
      {otherUser?.exists 
        ? (<MainInner info={otherUser.data()}/>)
        : (<div>Sorry, this profile was not found</div>)
      }
    </Main>
  )
}



export default OtherUserPage