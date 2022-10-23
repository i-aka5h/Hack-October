import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {

  const { transactions } = useContext(GlobalContext);

  let amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce(( oldvalue, newvalue) => oldvalue = oldvalue + newvalue, 0) 

  return (
    <div>
        <h4> My Balance </h4>
        <h1 className='balance'>Rs. {total}</h1>
    </div>
  )
}
