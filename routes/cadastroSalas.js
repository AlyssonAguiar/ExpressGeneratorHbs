var express = require('express');
var router = express.Router();
var SalaModel = require('../schema/sala');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('cadastroSalas', { title: 'Cadastro de Salas' });
});

// POST
router.post('/', function (req, res, next) {
  console.log(req.body);

  const mybodydata = {
    sala: req.body.sala,
    lotacao: req.body.lotacao
  }
  
  var data = SalaModel(mybodydata);

  data.save(function (err) {
    if (err) {
      res.render('cadastroSalas', { message: 'Sala não registrada!' });
    } else {
      res.render('cadastroSalas', { message: 'Sala registrada!' });
    }
  })
});

module.exports = router;