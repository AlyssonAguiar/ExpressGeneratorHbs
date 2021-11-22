var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cadastroPessoa', { title: 'Cadastro de Pessoa' });
});

// /* POST Data. */
// router.post('/cadastroPessoa', function (req, res, next) {
//   console.log(req.body);

//   const mybodydata = {
//     user_name: req.body.user_name,
//     user_email: req.body.user_email,
//     user_mobile: req.body.user_mobile
//   }
//   var data = UsersModel(mybodydata); 
//   //var data = UsersModel(req.body);
//   data.save(function (err) {
//     if (err) {
    
//      res.render('add-form',{message: 'User registered not successfully!'});
//     } else {
      
//      res.render('add-form',{message: 'User registered successfully!'});
//     }
//   })
// });

module.exports = router;
