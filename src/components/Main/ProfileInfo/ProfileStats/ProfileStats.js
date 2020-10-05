import React from "react"
import styled from "styled-components"

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

  return (
    <StyledProfileStats>
      <StyledCountStats>398 <span className="grey">Following</span></StyledCountStats>
      <StyledCountStats ml="21px">556 <span className="grey">Followers</span></StyledCountStats>
    </StyledProfileStats>
    
  )

}


export default ProfileStats