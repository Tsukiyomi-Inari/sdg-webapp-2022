// Sets the "interface" to interact with MongoDB via. Mongoose for user login & authentication

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
  
},
{
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema)