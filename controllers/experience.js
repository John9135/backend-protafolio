const Experience = require('../models/experience')

const controllerExperience = {
    create: async (req, res) => {
        try {
            const company = req.body.company
            const position = req.body.position
            const duration_experience = req.body.duration_experience
            const description_position = req.body.description_position

            await Experience.create({
                company: company,
                position: position,
                duration_experience: duration_experience,
                description_position: description_position
            })
            res.json({ msg: 'Create experience' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    getExperience: async (req, res) => {
        try {
            const experience = await Experience.find()
            res.json({ experience })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    updateExperiencie: async (req, res) => {
        try {
            const { id } = req.params
            const company = req.body.company
            const position = req.body.position
            const duration_experience = req.body.duration_experience
            const description_position = req.body.description_position

            await Experience.findByIdAndUpdate(id, {
                company: company,
                position: position,
                duration_experience: duration_experience,
                description_position: description_position
            })
            res.json({ msg: 'Update experience' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    deleteExperience: async (req, res) => {
        try {
            const {id} = req.params
            await Experience.findByIdAndDelete(id)
            res.json({msg: 'Delete experience'})
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

module.exports = controllerExperience