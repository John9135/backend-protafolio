const express = require('express')

const controllerExperience = require('../controllers/experience')

const router = express.Router()

router.post('/create', controllerExperience.create)

module.exports = router