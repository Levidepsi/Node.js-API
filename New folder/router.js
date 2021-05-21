const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Web Development');
    res.render('index')
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/blogs', (req, res) => {
    res.render('blogs')
})

module.exports = router;