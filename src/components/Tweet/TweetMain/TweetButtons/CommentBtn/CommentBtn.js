import React, { useContext } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'

import { CurrentPageContext } from "../../../../../utils/context"
import { StyledTweetButton } from "../TweetButtons"

const comment = <FontAwesomeIcon icon={faComment} />


function CommentBtn({ postID, commentsCount }) {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext)

  const handleComment = () => {
    setCurrentPage({
      ...currentPage,
      type: "OneTweetPage",
      postID
    })

    
  }
  
  return (
    <StyledTweetButton 
      onClick={handleComment}>
        {comment} {commentsCount || "0"}
    </StyledTweetButton>
  )
}

export default CommentBtn