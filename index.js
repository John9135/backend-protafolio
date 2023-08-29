const express = require("express")

const app = express()
const port = 3005
app.set('port', port)

app.get('/', (req, res) => {
    res.send('Holamundo')
})

app.listen(port, ()=> {
    console.log(`listeng in port ${port}`)
})