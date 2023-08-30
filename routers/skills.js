const express = require('express')

const controllerSkill = require('../controllers/skills')

const router = express.Router()

router.post('/create', controllerSkill.create)

module.exports = router