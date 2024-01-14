import { Transaction } from '../Transaction/Transaction'
import css from '../TransactionHistory/TransactionHistory.module.css'

const TransactionHistory ({transactions}) => {
    return (
      <table className={css['transaction-history']}>{transactions.map((transaction) => (
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <Transaction transaction={transaction} />
  </tbody>
        
      ))}
</table>
        
    )
}

export {TransactionHistory}