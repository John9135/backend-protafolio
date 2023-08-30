const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EducationSchema = new Schema({
    institution_name: {
        type: String,
        required: true,
        maxLength: 100
    },

    title: {
        type: String,
        required: true,
        maxLength: 100
    },

    duration: {
        type: String,
        required: true,
        maxLength: 50
    }
})

module.exports = mongoose.model('Education', EducationSchema)