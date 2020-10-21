import React, {useContext} from "react"
import styled from "styled-components"

import {CurrentUserContext} from "../../../../utils/context"

const StyledProfileStats = styled.div`
  margin-top: 14px;
  padding-left: 13px;
`

const StyledCountStats = styled.span`
  .grey {
    color: ${props => props.theme.grey};
    margin-left: 4px;
  }
  margin-left: ${props => props.ml};
`

function ProfileStats() {

  const {twitterUser} = useContext(CurrentUserContext)
  return (
    <StyledProfileStats>
      <StyledCountStats>{twitterUser.followersCount} <span className="grey">Following</span></StyledCountStats>
      <StyledCountStats ml="21px">{twitterUser.subscribeList.length} <span className="grey">Followers</span></StyledCountStats>
    </StyledProfileStats>
    
  )

}


export default ProfileStats