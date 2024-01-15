import styles from './trans.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map((item) => (
        <TransactionTableItem key={item.id} {...item} />
      ))}
    </tbody>
  </table>
);

export const TransactionTableItem = ({ type, amount, currency }) => {
  return (
    <tr className={styles.item}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
