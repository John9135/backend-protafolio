const Presentation = require('../models/presentation')

const controllerPresentation = {
    create: async (req, res) => {
        try {
            const photo = req.body.photo
            const introduction = req.body.introduction
            const description = req.body.description

            await Presentation.create({
                photo: photo,
                introduction: introduction,
                description: description
            })
            res.json({ msg: 'Create presentation' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    getPresentation: async (req, res) => {
        try {
            const presentation = await Presentation.find({})
            res.json(presentation)
        } catch (error) {
            return res.status(500).json({ msg: error })
        }
    },

    updatePresentation: async (req, res) => {
        try {
            const { id } = req.params
            const photo = req.body.photo
            const introduction = req.body.introduction
            const description = req.body.description

            await Presentation.findByIdAndUpdate(id, {
                photo: photo,
                introduction: introduction,
                description: description
            })
            res.json({ msg: 'Update presentation' })
        } catch (error) {
            return res.status(500).json({ msg: error })
        }
    }
}

module.exports = controllerPresentation