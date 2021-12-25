// import required packages
const express = require('express');
const path = require ('path');

// import user routes
const UserRoutes = require('./routes/UserRoute');

// init some var
const PORT = process.env.PORT || 3000;
const app = express();

// use middleware
app.use(express.static(path.join(__dirname, '/public')));

// use some route
app.use('/', UserRoutes);

// listen to the port 
app.listen(PORT, () => {
    console.log('server running at \x1b[36mhttp://localhost:3000\x1b[37m')
});