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

function ProfileStats({followersCount, followingCount}) {

  return (
    <StyledProfileStats>
      <StyledCountStats>{followersCount} <span className="grey">Followers</span></StyledCountStats>
      <StyledCountStats ml={"10px"}>{followingCount} <span className="grey">Following</span></StyledCountStats> 
    </StyledProfileStats>
    
  )

}

export default ProfileStats