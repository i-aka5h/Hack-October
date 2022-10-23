const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema ({
    text : {
        type : String,
        required : [true, 'Transaction Name is required']
    },
    amount : {
        type : Number,
        required : [true, 'amount is required']
    }

});

module.exports = mongoose.model('TransactionModel', transactionSchema);