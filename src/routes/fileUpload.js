const express = require('express')
const router = express.Router()

const multer = require('multer')
const upload = multer({ dest:'src/public'})

router.post('/file', upload.single('file'),
(req, res)=>res.append())//send())

module.exports = router
