const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
})

const Room = mongoose.model('room', roomSchema)
mongoose.exports = Room