import css from "../Transaction/Transaction.module.css";

const Transaction = ({ transaction: { type, amount, currency } }) => {
  //   const statusClasses = clsx(css.status, {
  //     [css.isActive]: isOnline,
  //     [css.isRetired]: !isOnline,
  //   });

  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

export { Transaction };

// Transaction({ items: transactions });
