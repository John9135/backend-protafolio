const express = require('express')

const controllerSkill = require('../controllers/skills')

const router = express.Router()

router.post('/create', controllerSkill.create)
router.get('/', controllerSkill.getSkills)
router.patch('/update/:id', controllerSkill.updateSkills)

module.exports = router