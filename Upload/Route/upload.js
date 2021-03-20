const express = require('express');
const { upload } = require('../Controller/Upload');

const router= express();

router.post('/upload',
upload);


module.exports=router;