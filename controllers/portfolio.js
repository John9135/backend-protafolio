const Portfolio = require('../models/portfolio')

const controllerPortfolio = {
    create: async (req, res) => {
        try {
            const name_proyect = req.body.name_proyect
            const lenguages = req.body.lenguages
            const description_proyect = req.body.description_proyect
            const link_proyect = req.body.link_proyect

            await Portfolio.create({
                name_proyect: name_proyect,
                lenguages: lenguages,
                description_proyect: description_proyect,
                link_proyect: link_proyect
            })
            res.json({ msg: 'Create protfolio' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    getPorfolio: async (req, res) => {
        try {
            const portfolio = await Portfolio.find()
            res.json({ portfolio })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    updatePortfolio: async (req, res) => {
        try {
            const { id } = req.params
            const name_proyect = req.body.name_proyect
            const lenguages = req.body.lenguages
            const description_proyect = req.body.description_proyect
            const link_proyect = req.body.link_proyect

            await Portfolio.findByIdAndUpdate(id, {
                name_proyect: name_proyect,
                lenguages: lenguages,
                description_proyect: description_proyect,
                link_proyect: link_proyect
            })
            res.json({ msg: 'Update portfolio' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    deletePortfolio: async (req, res) => {
        try {
            const { id } = req.params
            await Portfolio.findByIdAndDelete(id)
            res.json({ msg: 'Delete portfolio' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

module.exports = controllerPortfolio