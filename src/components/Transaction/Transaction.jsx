import css from "../Transaction/Transaction.module.css";

const Transaction = ({ item: { type, amount, currency } }) => {
  //   const statusClasses = clsx(css.status, {
  //     [css.isActive]: isOnline,
  //     [css.isRetired]: !isOnline,
  //   });

  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export { Transaction };
