const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const ocorrenciasModel = require('../models/ocorrenciasModel')

router.get('/', async (req, res) => {
    const [data] = await ocorrenciasModel.getAll()
    res.status(200).json(data);
})


module.exports = router;