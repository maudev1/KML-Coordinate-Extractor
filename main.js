const express = require('express');
const app = express();
const port = 3000;

const multer = require('multer')
const upload = multer({ dest:'src/public'})

app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/src/public'))

app.get('/home', (req, res) => {
    res.render('../src/views/index')
})

app.post('/file', upload.single('file'),
(req, res)=>res.send('<p>Enviado</p>'))

app.listen(port, () => {
    console.log(`Running at port ${port}`)

})



