import { React, createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    transactions: [],
    error: null,
    loading : true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getTransactions() {
            const res = await axios.get('/api/v1/transactions ');

            dispatch({
                type: 'get_transactions',
                payload: res.data.data
            });
    }

    async function deleteTransaction(id) {
        await axios.delete(`/api/v1/transactions/${id}`);

        dispatch ({
            type: 'delete_transaction',
            payload: id
        });
    }


    async function addTransaction  (transaction) {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          }

            const res = await axios.post('/api/v1/transactions', transaction, config);
            
            dispatch ({
            type : 'add_transaction',
            payload : res.data.data
        }); 
    }

    return ( 
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            error : state.error,
            loading : state.loading,
            getTransactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}