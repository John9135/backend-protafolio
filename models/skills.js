const mongoose = require('mongoose')

const Schema = mongoose.Schema

const skillSchema = new Schema({
    technical_skills: {
        type: String,
        required: true
    },

    soft_skills: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Skills', skillSchema)