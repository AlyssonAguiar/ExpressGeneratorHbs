var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cadastroSalas', { title: 'Cadastro de Salas' });
});

module.exports = router;
