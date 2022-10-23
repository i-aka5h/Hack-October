import { React, useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

  const [transactionName, setTransactionName] = useState('');
  const [amount, setAmount] = useState();

  const {addTransaction} = useContext(GlobalContext);

  const onSubmitHandler = event => {
    event.preventDefault();

    const newTransaction = {
      id : Math.floor(Math.random() * 100000000),
      text : transactionName,
      amount : parseInt(amount)
    }

    addTransaction(newTransaction);

    setTransactionName('');
    setAmount('');
  }


  return (
    <div>
        <h3>Add new transaction</h3>
        <form className="form" onSubmit={onSubmitHandler}>
            <div className="form-control">
            <label htmlFor="text">Transaction Name</label>
            <input 
              type="text" 
              className="text" 
              placeholder="Enter name of transaction" 
              value = {transactionName}
              onChange = {(e) => setTransactionName(e.target.value)}
            />
            </div>
            <div className="form-control">
            <label htmlFor="amount"> Amount </label>
            <input 
              type="number" 
              className="amount" 
              placeholder="Enter amount"
              value={amount}
              onChange = {(e) => setAmount(e.target.value)}
            />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </div>
  )
}
