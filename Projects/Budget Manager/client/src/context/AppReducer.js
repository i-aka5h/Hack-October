
const switchState = (state, action) => {
    switch(action.type) {

        case 'get_transactions' : 
        return {   
            ...state,
            loading : false,
            transactions: action.payload
        }

        case 'transction_error' : 
        return {   
            ...state,
            error : action.payload
        }

        case 'delete_transaction':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }

        case 'add_transaction' :
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
            
        default : 
            return state;
    }
}

export default switchState;