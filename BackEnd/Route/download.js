const express = require('express');
const { download } = require('../Controller/download');

const router = express();

router.get('/download/:_id',
   download);

module.exports=router;    
