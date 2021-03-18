const express = require('express');
const app = express();
const port = 3000;

const xmlFilter = require('./src/routes/filterXml')
const fileUpload = require('./src/routes/fileUpload')


app.use('/static', express.static(__dirname + '/src/public'))
app.set('view engine', 'ejs');

app.use('/', xmlFilter)
app.use('/', fileUpload )

app.listen(port, () => {
    console.log(`Running at port ${port}`)

})



