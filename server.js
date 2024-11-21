// Importing libraries
const express = require('express');
const app     = express();
const path    = require('path');



app.use(express.static('public'));
const router = express.Router(); 


router.get('/', (req, res) => {
    res.render('index.html');
});

app.use('/', router);


app.listen(9001, () => {
    console.log('Server is starting at port ', 9001);
});