const { Router } = require('express');
const { Model } = require('mongoose');
const router = Router();

router.get('/', (req, res)=>{
    res.send('PÁGINA DE INICIO')
});

module.exports = router;