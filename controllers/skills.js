const Skills = require('../models/skills')

const controllerSkill = {
    create: async (req, res) => {
        try {
            const technical_skills = req.body.technical_skills
            const soft_skills = req.body.soft_skills

            await Skills.create({
                technical_skills: technical_skills,
                soft_skills: soft_skills
            })
            res.json({ msg: 'Created skills' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    getSkills: async (req, res) => {
        try {
            const skills = await Skills.find()
            res.json({ skills })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },

    updateSkills: async (req, res) => {
        try {
            const { id } = req.params
            const technical_skills = req.body.technical_skills
            const soft_skills = req.body.soft_skills

            await Skills.findByIdAndUpdate(id, {
                technical_skills: technical_skills,
                soft_skills: soft_skills
            })
            res.json({ msg: 'Update skills' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

module.exports = controllerSkill