const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        
    },
    prize: {
        type: Number,
        required: true,
    }
})


//.model(export-name, schema, collection-name)
module.exports = mongoose.model('Room', roomSchema)