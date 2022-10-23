import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ( { transaction } ) => {

    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount > 0 ? '+' : '-';

  return (
    <div>
        <li className={transaction.amount > 0 ? 'plus' : 'minus'} >
          {transaction.text} <span> {sign} Rs. {Math.abs(transaction.amount)} </span>
          <button onClick={() => deleteTransaction(transaction._id) } className="delete-btn">x</button>
        </li>
    </div>
  )
}
