const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('users',usersSchema)
