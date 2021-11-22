var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('dadosPessoa', { title: 'DadosPessoa' });
});


/* GET por ID */
router.get('/consultar/:name', function (req, res) {
  console.log(req.params.name);
  UsersModel.findOne(req.params.name, function (err, users) {
      if (err) {
          console.log(err);
      } else {
          console.log(users);
          res.render('dadosPessoa', { userDetail: users });
      }
  });
});

/* DELETE por ID */
router.get('/delete/:_id', function (req, res) {
  UsersModel.findByIdAndRemove(req.params._id, function (err, project) {
    if (err) {

      res.render('dadosPessoa', { message: 'Usuário não deletado!' });
    } else {

      res.render('dadosPessoa', { message: 'Usuário deletado com sucesso!' });
    }
  });
});

module.exports = router;
