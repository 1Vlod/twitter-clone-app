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
  const {currentPage} = useContext(CurrentPageContext)
  const {twitterUser} = useContext(CurrentUserContext)

  const retweetAuthor = () => {
    if (currentPage.type === "OtherUserPage") {
      return currentPage.displayName
    }

    return twitterUser.name
  }

  return <StyledRetweetedInfo>{retweet}{retweetAuthor()} Retweeted</StyledRetweetedInfo>
}

export default RetweetedInfo