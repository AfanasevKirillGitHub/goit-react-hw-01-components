import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableItem,
  TableBody,
  TableBodyItem,
  TableElement,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableItem>Type</TableItem>
          <TableItem>Amount</TableItem>
          <TableItem>Currency</TableItem>
        </tr>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableBodyItem key={id}>
            <TableElement>{type}</TableElement>
            <TableElement>{amount}</TableElement>
            <TableElement>{currency}</TableElement>
          </TableBodyItem>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
