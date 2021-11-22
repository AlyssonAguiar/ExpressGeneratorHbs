var express = require('express');
var router = express.Router();
var UsersModel = require('../schema/user');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cadastroPessoa', { title: 'Cadastro de Pessoa' });
});

router.post('/', function (req, res, next) {
  console.log(req.body);

  const mybodydata = {
      name: req.body.name,
      sobrenome: req.body.sobrenome
  }
  var data = UsersModel(mybodydata);
  //var data = UsersModel(req.body);
  data.save(function (err) {
      if (err) {

          res.render('cadastroPessoa', { message: 'Usuário não cadastrado!' });
      } else {

          res.render('cadastroPessoa', { message: 'Usuário cadastrado com sucesso!' });
      }
  })
});

module.exports = router;