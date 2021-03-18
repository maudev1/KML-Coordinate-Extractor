const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('../src/views/index')
})

module.exports = router