const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");

const uploadRoute = require('./Route/upload');
const downloadRoute= require('./Route/download');
const reformatRoue= require('./Route/reformat');



const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/uploads')));

app.use(uploadRoute);
app.use(downloadRoute);
app.use(reformatRoue);

app.listen(8080, () => {
    console.log('Server is running on 8080')
})

module.exports =app;