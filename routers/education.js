const express = require('express')

const controllerEducation = require('../controllers/education')

const router = express.Router()

router.post('/create', controllerEducation.create)
router.get('/', controllerEducation.getEducation)
router.patch('/update/:id', controllerEducation.updateEducation)

module.exports = router