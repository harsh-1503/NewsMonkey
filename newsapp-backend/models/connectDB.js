const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI

const connectDB = (url)=>{
    return mongoose.connect(MONGO_URI).then(()=>{
        console.log('Connected to MONGO DB...');
    }).catch((error)=>{
        console.log(error);
    })
}

module.exports = connectDB