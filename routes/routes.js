
'use strict';

const express = require('express');
const router = express.Router({caseSensitive:true});

// const controller = require('../controller/controller.js');



router.get('/', (req, res) => res.sendFile('index.html'))


module.exports = router;
