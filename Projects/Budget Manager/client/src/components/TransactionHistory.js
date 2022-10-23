import { React, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionHistory = () => {

  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <h3>History</h3> 
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction}/>
        ))} 
      </ul>
    </div>
  )
}
