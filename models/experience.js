const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Experience = new Schema({
    company: {
        type: String,
        required: true,
        maxLength: 50
    },

    position: {
        type: String,
        required: true,
        maxLength: 50
    },

    duration: {
        type: String,
        required: false,
        maxLength: 20
    },

    description_position: {
        type: String,
        required: true,
        maxLength: 600
    }
})

module.exports = mongoose.model('experience', Experience)