const express = require('express');
const app = express()
const port = 3000

const dotenv = require('dotenv')

dotenv.config()

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.render('../src/views/index')
})

app.use('/static', express.static(__dirname + '/src/public'))

app.listen(port, () => {
    console.log(`Running at port ${port}`)

})



