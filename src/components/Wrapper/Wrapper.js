import { render } from "@testing-library/react";
import React from "react"
import styled from "styled-components"
import Twitter from "../Twitter/Twitter"

const TWITTER_BACKGROUND = "#17202A";

const StyledWrapper = styled.section`
  background: ${TWITTER_BACKGROUND};
`
function Wrapper() {
  return (
    <StyledWrapper>
      <Twitter/>
    </StyledWrapper>
  )
}

export default Wrapper;