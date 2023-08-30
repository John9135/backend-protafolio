const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    email: {
        type: String,
        required: true,
        maxLength: 60
    },

    phone: {
        type: String,
        required: true,
        maxLength: 20
    },

    likedin: {
        type: String,
        required: true
    },

    gitHub: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Contact', contactSchema)