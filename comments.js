// create web server
const express = require('express');
const app = express();

// create a route
app.get('/comments', (req, res) => {
    res.send('You are on the comments page');
});

// start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
