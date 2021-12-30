// import express
const express = require('express');

// init router functions
const router = express.Router();

// create simple route
router.get('/', (req,res) => {
    res.render('home', {
        layout: 'layouts/index',
        title: 'Hello World'
    });
});

// export this module 
module.exports = router;