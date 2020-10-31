import React, {useContext} from "react"
import styled from "styled-components"

import { CurrentPageContext, CurrentUserContext } from "../../../utils/context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRetweet } from "@fortawesome/free-solid-svg-icons"

const retweet = <FontAwesomeIcon icon={faRetweet} />

const StyledRetweetedInfo = styled.div`
  color: ${props => props.theme.grey};
`

function RetweetedInfo() {
  const {currentPage, setCurrentPage} = useContext(CurrentPageContext)
  const {twitterUser} = useContext(CurrentUserContext)

  const retweetAuthor = () => {
    if (currentPage.type === "otherUserPage") {
    }
  }

  return <StyledRetweetedInfo>{retweet}{twitterUser.name} Retweeted</StyledRetweetedInfo>
}

export default RetweetedInfo