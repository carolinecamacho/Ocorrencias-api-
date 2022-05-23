const express = require('express');
const router = express.Router();

const ocorrenciasController = require('../controllers/ocorrenciasController');
const endereçosController = require('../controllers/endereçosController');

router.use('/ocorrencias', ocorrenciasController);
router.use('/enderecos', endereçosController);

module.exports = router;