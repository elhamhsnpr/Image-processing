const express = require('express');
const { upload } = require('../Controller/upload');

const router= express();

router.post('/upload',
upload);


module.exports=router;