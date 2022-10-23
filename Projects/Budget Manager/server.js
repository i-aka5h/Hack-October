const path = require('path');
const express = require('express'); 
const morgan = require('morgan'); 
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./db');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

dotenv.config({ path:'./config/config.env' });

connectDB();

const transactions = require('./routes/transactionRouter')

app.use('/api/v1/transactions', transactions);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 4000; 

app.listen( PORT, () => {
    console.log(`app running on port ${PORT}`.yellow.bold)
})