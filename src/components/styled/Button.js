import React from "react";
import styled, { css } from "styled-components";
import { margin, padding, state } from "./utils";
import theme from "./defaultTheme";

const borderCss = css`
  border: none;
  border-radius: 30px;
`;

const StyledButton = styled.button`
  ${margin};
  ${padding};
  ${state};

  ${borderCss};

  text-align: center;
  height: 33px;
  background-color: ${({ backgroundColor = "background" }) => theme.buttons[backgroundColor]};
  color: ${theme.buttons.text};
  min-width: 70px;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;

  ${({ link }) =>
    link &&
    `
    background: transparent;
    color: ${theme.colors.primary};
    box-shadow: none;

    &:hover, &:active {
      text-decoration: underline;
    }
  `}

  ${({ linkSubtle }) =>
    linkSubtle &&
    `
    background: transparent;
    color: ${theme.colors.primary};
    min-width: auto!important;
    padding: 0;
    box-shadow: none;
    margin: 0;

    &:hover, &:active {
      text-decoration: underline;
    }
  `}

  ${({ linkWithIcon }) =>
    linkWithIcon &&
    `
    background: transparent;
    color: ${theme.colors.primary};
    min-width: auto!important;
    padding: 0;
    box-shadow: none;
    margin: 0;
    display: flex;
    height: auto;
    align-items: center;
  `}

  ${({ modal }) =>
    modal &&
    `
    margin-left: ${theme.spacings.lg};
    margin-right: 0;
  `}

  ${({ secondary }) =>
    secondary &&
    `
     background-color: ${theme.buttons.secondaryBackground};
     color: ${theme.buttons.secondaryText};
  `}

  ${({ minWidth }) => minWidth && `min-width: ${minWidth}px;`}
  ${({ autoWidth }) => autoWidth && `min-width: auto!important;`}
`;

const StyledButtonContainer = styled.div`
  ${borderCss}

  display: inline-block;

  > button {
    transition: opacity ${theme.timings.transition};
  }
  :hover > button {
    opacity: 0.6;
    animation: grow ${theme.timings.transition};
  }

  @keyframes grow {
    50% {
      transform: scale(0.9);
    }
  }
`;

const Button = props => (
  <StyledButtonContainer>
    <StyledButton {...props} />
  </StyledButtonContainer>
);

Button.displayName = "StyledButton";
export default Button;
