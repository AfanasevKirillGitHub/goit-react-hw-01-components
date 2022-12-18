import styled from 'styled-components';

export const Table = styled.table`
  width: 800px;
  margin: 0 auto;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
`;

export const TableItem = styled.th`
  padding: ${props => props.theme.space[4]}px;
`;

export const TableBody = styled.tbody`
  font-size: ${props => props.theme.fontSizes.s};
`;

export const TableBodyItem = styled.tr`
  :nth-of-type(2n) {
    background-color: ${props => props.theme.colors.lightBlue};
  }
`;

export const TableElement = styled.td`
  text-align: center;
  padding: ${props => props.theme.space[4]}px;
`;
