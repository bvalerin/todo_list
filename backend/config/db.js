const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const DBConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connected DB');
    } catch (error) {
        console.log('Error trying to connect database!');
        console.log(error);
        process.exit(1); // Stop the app!
    }
}

module.exports = DBConnect;