import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";
import theme from "../../styled/defaultTheme";

const Success = styled(ErrorMessage)`
  color: ${theme.colors.success};
`;

export default Success;
