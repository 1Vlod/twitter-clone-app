import React from "react"
import styled from "styled-components"


const StyledWidget = styled.div`
  background: ${props => props.theme.twitterCard};
  border-radius: 14px;

  margin-top: 15px;
`

const StyledHeader = styled.div`
  padding: 10px 0 10px 14px;

  border-bottom: 1px solid ${props => props.theme.line};
`

const StyledTitle = styled.h2`
  margin: 0;
  padding: 0;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
` 
const StyledMain = styled.div`
  padding: 10px 14px;
  font-size: 14px;
`
const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.red};
  transition: color 1s;

  &:hover {
    color: white
  }
`

const Widget = () => {

  return (
    <StyledWidget>
      <StyledHeader>
        <StyledTitle>About</StyledTitle>
      </StyledHeader>
      <StyledMain>
        Please check{" "} 
        <StyledLink 
          href="https://github.com/1Vlod/twitter-clone-app/blob/tweet-buttons/README.md" 
          target="_blank">
          readme
        </StyledLink>
        {" "}before you start
      </StyledMain>

    </StyledWidget>
  )
}

export default Widget