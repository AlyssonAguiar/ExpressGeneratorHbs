var express = require('express');
var router = express.Router();
var UsersModel = require('../schema/user');
var Response = require('../response');

//List Table Data
router.get('/', function (req, res) {
    res.render('index');
});

//Retorna pessoas cadastras porém em arquivo json não tratado
router.get('/tabelaPessoa', function (req, res, next) {
    UsersModel.find({}, function (err, users) {
        if (err) {
            res.send('algo deu errado');
            next();
        }
        res.json(users);
    })
})




module.exports = router;
