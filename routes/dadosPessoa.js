var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dadosPessoa', { title: 'DadosPessoa' });
});

/* GET SINGLE User BY ID */
router.get('/consultar/:nome', function(req, res) {
  console.log(req.params.nome);
  UsersModel.findOne(req.params.nome, function(err, users) {
      if (err) {
          console.log(err);
      } else {
          console.log(users);
          res.render('dadosPessoa', {userDetail: users });
      }
  });
});


module.exports = router;
