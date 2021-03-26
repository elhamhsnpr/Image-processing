const e = require('cors');
const express = require('express');
const { reformat } = require('../Controller/reformat');

const router = express();

router.get('/reformat/:name',
    reformat);

module.exports = router;
