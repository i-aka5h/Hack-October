const TransactionModel = require('../models/TransactionModel');


exports.getTransactions = async (req, res) => {
    try {
        const transactions = await TransactionModel.find();

        return res.status(200).json({
            success : true,
            count : transactions.length,
            data : transactions
        });
    } catch (err) {
        return res.status(400).json({
            fail : true,
            message : {err}
        });
    }
} 

exports.addTransaction = async (req, res, next) => {

    try {
        const { text, amount } = req.body;

        const transaction = await TransactionModel.create(req.body);

        return res.status(201).json({
            success : true,
            data : transaction
        });
    } catch (err) {
        return res.status(500).json({
            fail : true,
            message : {err}
        });
    }
}

exports.deleteTransaction = async (req, res, next) => {
    
    try {
        const transaction = await TransactionModel.findById(req.params.id);
        
        if(!transaction) {
            return res.status(404).json({
                success : false,
                message : " no such transaction found"
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success : true,
            data : {}
        }); 
        
    } catch (err) {
        return res.status(500).json({
            fail : true,
            message : {err}
        });
    }
}