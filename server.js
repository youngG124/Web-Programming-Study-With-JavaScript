const { application } = require('express');
const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('start server : localhost:3000');
});

app.get('/', function (req,res) {
    res.send('hello world!')
});

app.get('/about', function (req,res) {
    res.send('about page')
});