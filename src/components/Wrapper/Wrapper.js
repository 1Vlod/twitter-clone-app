
import React from "react"
import styled, {ThemeProvider} from "styled-components"

const TWITTER_BACKGROUND = "#17202A";

const StyledWrapper = styled.section`
  background: ${TWITTER_BACKGROUND};
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
  font-family: Roboto;
`

const colorVaraiables = {
  blue: "#4BA0EC",
  line: "#3A444C",
  grey: "#8A98A4",
  background: TWITTER_BACKGROUND
}


function Wrapper(props) {
  return (
    <ThemeProvider theme={colorVaraiables}>
      <StyledWrapper>
        {props.children}
        
      </StyledWrapper>
    </ThemeProvider>
  )
}

export default Wrapper;

