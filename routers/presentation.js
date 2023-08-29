const express = require("express")

const controllerPresentation = require("../controllers/presentation")

const router = express.Router()

router.post('/create', controllerPresentation.create)
router.get('/', controllerPresentation.getPresentation)
router.patch('/update/:id', controllerPresentation.updatePresentation)


module.exports = router