const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PresentationSchema = new Schema({
    photo: {
        type: String,
        required: false,
    },

    introduction: {
        type: String,
        required: true,
        maxLength: 100
    },

    description: {
        type: String,
        required: true,
        maxLength: 600
    }
})

module.exports = mongoose.model('Presentation', PresentationSchema)