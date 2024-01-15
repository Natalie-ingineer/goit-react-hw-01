import { Transaction } from '../Transaction/Transaction'
import css from '../TransactionHistory/TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
    return (
      <table className={css['transaction-history']}>{items.map((transaction) => (
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      <tr  key={transaction.id}>
    <Transaction transaction={transaction} />
      </tr>
    </tbody>
        
      ))}
</table>
        
    )
}

export {TransactionHistory}