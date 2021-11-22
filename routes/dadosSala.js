var express = require('express');
var router = express.Router();
var SalaModel = require('../schema/sala');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dadosSala', { title: 'Dados Sala' });
});

/* GET por ID */
router.get('/consultar/:_id', function (req, res) {
  console.log(req.params._id);
  UsersModel.findOne(req.params._id, function (err, salas) {
      if (err) {
          console.log(err);
      } else {
          console.log(salas);
          res.render('dadosSala', { salaDetails: salas });
      }
  });
});

/* UPDATE utilizando POST */
router.post('/update/_id', function (req, res, next) {
  console.log(req.body._id);
  UsersModel.findByIdAndUpdate(req.body._id, req.body, function (err, post) {
    if (err) {

      res.render('dadosSala', { message: 'Usuário não alterado!' });
  } else {

      res.render('dadosSala', { message: 'Usuário alterado com sucesso!!' });
  }
  });
});

module.exports = router;