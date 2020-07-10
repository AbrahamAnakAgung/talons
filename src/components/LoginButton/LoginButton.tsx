import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants";

export function LoginButton() {
  return <LoginLink to='/enter/login'>Log in</LoginLink>;
}

const LoginLink = styled(Link)`
  font-size: 1.8rem;
  font-family: inherit;
  text-decoration: none;
  transition: color 250ms;

  &:link,
  &:visited {
    color: ${COLORS.grayDark};
  }

  &:hover,
  &:active {
    color: ${COLORS.tertiary};
  }
`;
