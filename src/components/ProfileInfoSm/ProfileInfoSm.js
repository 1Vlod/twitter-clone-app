import React from "react"
import styled, {css} from "styled-components"

import {getTimeString} from "../../utils/utilsFunctions"

const StyledProfileInfoSm = styled.div`
  position: relative;
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

  & .profileInfoSm__createTime {
    position: absolute;
    right: 0;
    top: 0;

    font-size: 16px;
    line-height: 19px;
    color: ${props => props.theme.grey};
    background-color: ${props => props.theme.background};
  }



  margin-left: ${props => props.ml};
  margin-top: ${props => props.mt};
`

function ProfileInfoSm(props) {
  return (
    <StyledProfileInfoSm {...props}>
      <h2 className="profileInfoSm__title">{props.title || "Name"}</h2>
      <span className="profileInfoSm__subtitle">{`@${props.subtitle || "Name"}`}</span>
      {props.createTime && (
        <span className="profileInfoSm__createTime">
          {getTimeString(props.createTime.toDate())}
        </span>
      )}
    </StyledProfileInfoSm>
  )
}

export default ProfileInfoSm