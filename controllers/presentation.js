const Presentation = require('../models/presentation')

const controllerPresentation = {
    create: async (req, res) => {
        try {
            const photo = req.body.photo
            const introduction = require.body.introduction
            const description = require.body.description

            await Presentation.create({
                photo: photo,
                introduction: introduction,
                description: description
            })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

module.exports = controllerPresentation