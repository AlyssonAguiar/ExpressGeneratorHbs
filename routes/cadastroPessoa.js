var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cadastroPessoa', { title: 'Cadastro de Pessoa' });
});

module.exports = router;
