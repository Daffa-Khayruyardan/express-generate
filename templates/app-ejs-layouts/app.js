// import required packages
const express = require('express');
const path = require ('path');
const ejsLayouts = require('express-ejs-layouts');

// import user routes
const UserRoutes = require('./routes/UserRoute');

// init some var
const PORT = process.env.PORT || 3000;
const app = express();

// set view engine
app.set('view engine', 'ejs');

// use middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(ejsLayouts);

// use some route
app.use('/', UserRoutes);

// listen to the port 
app.listen(PORT, () => {
    console.log('server running at \x1b[36mhttp://localhost:3000\x1b[37m')
});