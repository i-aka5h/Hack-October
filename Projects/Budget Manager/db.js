const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
        });

        console.log('data base connection successful'.cyan.bold)
    } catch(err) {
        console.log(`Error : ${err.message}`.red.bold);
        process.exit(1);
    }
}

module.exports = connectDB;