// import express
const express = require('express');

// init router functions
const router = express.Router();

// create simple route
router.get('/', (req,res) => {
    res.render('index');
});

// export this module 
module.exports = router;