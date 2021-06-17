import styled from "styled-components";
import { detectValue, display, margin, padding } from "../../styled/utils";
import theme from "../../styled/defaultTheme";

const TextField = styled.input`
  width: 100%;
  ${({ expand }) => expand && `width: ${expand[0]};`}
  ${({ expand }) => expand && `margin-left: 0;`}
  border: 1px solid #cccccc;
  color: ${theme.colors.primaryTextColor};
  max-width: ${({ width }) => detectValue(width)};
  padding: ${theme.spacings.xs};
  padding-left: 10px;
  min-height: 2rem;
  border-radius: 10px;
  transition-property: border-color, box-shadow, width, margin-left;
  transition-duration: ${theme.timings.transition};

  ${({ as, value }) =>
    as === "select" && value === ""
      ? `color: ${theme.colors.placeholder};`
      : `color: ${theme.colors.primaryTextColor};`}

  &::placeholder {
    color: ${theme.colors.placeholder};
  }

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 12px -2px ${theme.colors.primary};
    ${({ expand }) => expand && `width: ${expand[1]};`}
    ${({ expand }) => expand && `margin-left: calc(${expand[0]} - ${expand[1]});`}
  }

  ${display};
  ${margin};
  ${padding};

  ${({ error }) =>
    error &&
    `
      background-color: ${theme.colors.dangerBackground};
      color: ${theme.colors.danger};
      &::placeholder {
        color: ${theme.colors.danger};
      }
  `}

  ${({ error, hasIcon }) =>
    error &&
    !hasIcon &&
    `
      border-color: ${theme.colors.danger};
  `}
`;

export default TextField;
