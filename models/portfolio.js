const mongoose = require('mongoose')

const Schema = mongoose.Schema

const portfolioSchema = new Schema({
    name_proyect: {
        type: String,
        required: true
    },

    lenguages: {
        type: String,
        required: true
    },

    description_proyect: {
        type: String,
        required: true
    },

    link_proyect: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Portfolio', portfolioSchema)