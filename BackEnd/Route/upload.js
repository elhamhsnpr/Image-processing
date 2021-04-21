const express = require('express');
const { upload, imageInsert } = require('../Controller/upload');

const router = express();

router.post('/upload',
    upload,
    imageInsert);


module.exports = router;