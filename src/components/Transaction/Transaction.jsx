import css from "../Transaction/Transaction.module.css";

const Transaction = ({ transaction: { type, amount, currency } }) => {
  //   const statusClasses = clsx(css.status, {
  //     [css.isActive]: isOnline,
  //     [css.isRetired]: !isOnline,
  //   });

  return (
    <div className={css.item}>
      <td className={css.info}>{type}</td>
      <td className={css.info}>{amount}</td>
      <td className={css.info}>{currency}</td>
    </div>
  );
};

export { Transaction };

// Transaction({ items: transactions });
