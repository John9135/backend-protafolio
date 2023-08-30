const Contact = require('../models/contact')

const controllerContact = {
    create: async (req, res) => {
        try {
            const email = req.body.email
            const phone = req.body.phone
            const likedin = req.body.likedin
            const gitHub = req.body.gitHub

            await Contact.create({
                email: email,
                phone: phone,
                likedin: likedin,
                gitHub: gitHub
            })
            res.json({ msg: 'Created contact' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    getContat: async (req, res) => {
        try {
            const contac = await Contact.find()
            res.json(contac)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

module.exports = controllerContact