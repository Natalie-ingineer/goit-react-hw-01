import css from "../TransactionHistory/TransactionHistory.module.css";
import { Transaction } from "../Transaction/Transaction";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css["transaction-history"]}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.bodyTable}>
        {items.map((transaction) => (
          <tr key={transaction.id}>
            <Transaction transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { TransactionHistory };
