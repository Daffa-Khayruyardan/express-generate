// import some packages here
const express = require('express');
const path = require('path');

// init router functions
const router = express.Router();

// create simple route
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// export this module 
module.exports = router;