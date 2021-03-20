const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const uploadRoute = require('./Route/upload');



const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/uploads')));

app.use(uploadRoute);

app.listen(8080, () => {
    console.log('Server is running on 8080')
})

module.exports =app;