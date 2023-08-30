const education = require('../models/education')
const Education = require('../models/education')

const controllerEducation = {
    create: async (req, res) => {
        try {
            const institution_name = req.body.institution_name
            const title = req.body.title
            const duration = req.body.duration

            await Education.create({
                institution_name: institution_name,
                title: title,
                duration: duration
            })
            res.json({ msg: 'create education' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    getEducation: async (req, res) => {
        try {
            const education = await Education.find({})
            res.json({ education })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    updateEducation: async (req, res) => {
        try {
            const { id } = req.params
            const institution_name = req.body.institution_name
            const title = req.body.title
            const duration = req.body.duration

            await Education.findByIdAndUpdate(id, {
                institution_name: institution_name,
                title: title,
                duration: duration
            })
            res.json({ msg: "update education" })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    deleteEducation: async (req, res) => {
        try {
            const {id} = req.params
            await Education.findByIdAndDelete(id)
            res.json({msg: 'Delete education'})

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

module.exports = controllerEducation