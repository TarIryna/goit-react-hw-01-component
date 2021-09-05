import React from "react";
import PropTypes from "prop-types";
import s from './Transactions.module.css';

const Transactions = ({ items}) => (
 <section class={s.transactions}>
 <table class="transaction-history">
  <thead>
    <tr>
      <th class={s.columnTitle}>Type</th>
      <th class={s.columnTitle}>Amount</th>
      <th class={s.columnTitle}>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map(({id, type, amount, currency})=>(
        <tr class={s.row} key={id}>
      <td class={s.tableText}>{type}</td>
      <td class={s.tableText}>{amount}</td>
      <td class={s.tableText}>{currency}</td>
    </tr>
  ))}
  </tbody>
</table>
</section>
);

Transactions.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
};

export default Transactions;