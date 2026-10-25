
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Request received!');
    res.send('Hello prince');
});

module.exports = app;

