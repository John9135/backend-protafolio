const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const presentationRouters = require('./routers/presentation')
const educationRouters = require('./routers/education')
const experienceRouters = require('./routers/experience')
const skillsRouters = require('./routers/skills')
const contactRouters = require('./routers/contact')

const app = express()
const port = 3005

app.set('port', port)
app.use(express.json())
app.use('/api/presentation', presentationRouters)
app.use('/api/education', educationRouters)
app.use('/api/experience', experienceRouters)
app.use('/api/skills', skillsRouters)
app.use('/api/contact', contactRouters)

app.get('/', (req, res) => {
    res.send('Holamundo')
})

mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => console.log('conect db'))
    .catch((err) => console.error(err))

app.listen(port, () => {
    console.log(`listeng in port ${port}`)
})