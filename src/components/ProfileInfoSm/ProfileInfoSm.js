import React from "react"
import styled, {css} from "styled-components"

const StyledProfileInfoSm = styled.div`

  & .profileInfoSm__title {
    color: #fff;
    font-weight: bold;
    font-size: ${props => props.fz || "20px"};
    margin: 0;
    margin-bottom: 1px;

    ${props => props.oneLine && css`display: inline-block;`}
  }

  & .profileInfoSm__subtitle {
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    color: ${props => props.theme.grey}
  }

  margin-left: ${props => props.ml};
  margin-top: ${props => props.mt};
`

function ProfileInfoSm(props) {
  return (
    <StyledProfileInfoSm {...props}>
      <h2 className="profileInfoSm__title">{props.title || "Name"}</h2>
      <span className="profileInfoSm__subtitle">{`@${props.subtitle || "Name"}`}</span>
    </StyledProfileInfoSm>
  )
}

export default ProfileInfoSm