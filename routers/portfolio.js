const express = require('express')

const controllerPortfolio = require('../controllers/portfolio')

const router = express.Router()

router.post('/create', controllerPortfolio.create)
router.get('/', controllerPortfolio.getPorfolio)
router.patch('/update/:id', controllerPortfolio.updatePortfolio)
router.delete('/delete/:id', controllerPortfolio.deletePortfolio)

module.exports = router