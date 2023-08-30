const express = require('express')

const controllerContact = require('../controllers/contac')

const router = express.Router()

router.post('/create', controllerContact.create)
router.get('/', controllerContact.getContat)

module.exports = router