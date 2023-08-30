const express = require('express')

const controllerPortfolio = require('../controllers/portfolio')

const router = express.Router()

router.post('/create', controllerPortfolio.create)
router.get('/',controllerPortfolio.getPorfolio)

module.exports = router