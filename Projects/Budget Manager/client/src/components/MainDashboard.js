import { React, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const MainDashboard = () => {

  const { transactions } = useContext(GlobalContext);
  let amounts = transactions.map(transaction => transaction.amount)

  const income = amounts.filter(item => item > 0).reduce((oldvalue , newvalue) => oldvalue = oldvalue+newvalue, 0)
  const expense = amounts
  .filter(item => item < 0)
  .reduce((oldvalue , newvalue) => (oldvalue = oldvalue+newvalue), 0)* -1
  
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus"> Rs. {income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus"> Rs. {expense} </p>
        </div>
      </div>
  )
}
