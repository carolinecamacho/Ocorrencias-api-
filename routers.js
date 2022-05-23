const express = require('express');
const router = express.Router();

//Health Checker controller
router.use('/healthchecker', require('./controllers/ocorrenciasController'));

module.exports = router;