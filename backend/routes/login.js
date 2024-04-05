const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is login route');
});

router.get('/101', (req, res) => {
    res.send('this is login 101 route');
});

router.get('/102', (req, res) => {
    res.send('this is login 102 route');
});

module.exports = router;