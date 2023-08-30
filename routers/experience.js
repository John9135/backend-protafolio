const express = require('express')

const controllerExperience = require('../controllers/experience')

const router = express.Router()

router.post('/create', controllerExperience.create)
router.get('/', controllerExperience.getExperience)
router.patch('/update/:id', controllerExperience.updateExperiencie)
router.delete('/delete/:id', controllerExperience.deleteExperience)

module.exports = router