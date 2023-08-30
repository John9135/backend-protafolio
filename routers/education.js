const express = require('express')

const controllerEducation = require('../controllers/education')

const router = express.Router()

router.post('/create', controllerEducation.create)
router.get('/', controllerEducation.getEducation)

module.exports = router