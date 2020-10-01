
import React from "react"
import styled from "styled-components"
import Twitter from "../Twitter/Twitter"

const TWITTER_BACKGROUND = "#17202A";

const StyledWrapper = styled.section`
  background: ${TWITTER_BACKGROUND};
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
  font-family: Roboto;
`
function Wrapper() {
  return (
    <StyledWrapper>
      <Twitter/>
    </StyledWrapper>
  )
}

export default Wrapper;