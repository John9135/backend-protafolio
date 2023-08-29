const express = require("express")

const controllerPresentation = require("../controllers/presentation")

const router = express.Router()

router.post('/create', controllerPresentation.create)


module.exports = router