const express = require('express'); 
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactionController');

const router = express.Router();

router.route('/').get(getTransactions);
router.route('/').post(addTransaction);
router.route('/:id').delete(deleteTransaction);

module.exports = router;