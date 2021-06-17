import styled from "styled-components";
import { margin } from "../../styled/utils";
import theme from "../../styled/defaultTheme";

const Table = styled.table`
  ${margin}

  border-collapse: collapse;

  th {
    font-weight: bold;
  }

  th,
  td {
    border: solid 1px ${theme.borders.light};
    padding: 5px 10px;
  }
`;

export default Table;
