var express = require('express');
var router = express.Router();

var SalaModel = require('../schema/sala');
var Response = require('../response');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dadosSala', { title: 'Dados Sala' });
});

/* GET SINGLE User BY ID */


module.exports = router;
