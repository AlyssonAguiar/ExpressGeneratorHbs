var express = require('express');
var routerSala = express.Router();

var SalaModel = require('../schema/sala');
var Response = require('../response');

//List Table Data
routerSala.get('/', function(req, res) {
     
            res.render('index');
         
});

//List Table Data
// routerSala.get('/display', function(req, res) {
//     SalaModel.find(function(err, users) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.render('display-table', { users: users });
//             console.log(users);
//         }
//     });
// });


//Display Form 
// routerSala.get('/add', function(req, res, next) {
//     res.render('add-form');
// });


/* POST Data. */
routerSala.post('/cadastroSalas', function(req, res, next) {
    console.log(req.body);

    const mybodydata = {
        sala: req.body.sala,
        lotacao: req.body.lotacao
    }
    var data = SalaModel(mybodydata);
    //var data = SalaModel(req.body);
    data.save(function(err) {
        if (err) {


        } else {

        }
    })
});

/* DELETE User BY ID */
// routerSala.get('/delete/:id', function(req, res) {
//     SalaModel.findByIdAndRemove(req.params.id, function(err, project) {
//         if (err) {

//             req.flash('error_msg', 'Record Not Deleted');
//             res.redirect('../display');
//         } else {

//             req.flash('success_msg', 'Record Deleted');
//             res.redirect('../display');
//         }
//     });
// });


/* GET SINGLE User BY ID */
// routerSala.get('/edit/:id', function(req, res) {
//     console.log(req.params.id);
//     SalaModel.findById(req.params.id, function(err, user) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(user);

//             res.render('edit-form', { userDetail: user });
//         }
//     });
// });

/* UPDATE User */
// routerSala.post('/edit/:id', function(req, res) {
//     SalaModel.findByIdAndUpdate(req.params.id, req.body, function(err) {
//         if (err) {
//             req.flash('error_msg', 'Something went wrong! User could not updated.');
//             res.redirect('edit/' + req.params.id);
//         } else {
//             req.flash('success_msg', 'Record Updated');
//             res.redirect('../display');
//         }
//     });
// });


// routerSala.get('/get-all-users-api', function(req, res, next) {
//     SalaModel.find({}, function(err, posts) {
//         if (err) {
//             Response.errorResponse(err, res);
//         } else {
//             Response.successResponse('User Listing!', res, posts);
//         }
//     });

// });

// routerSala.post('/add-users-api', function(req, res, next) {
//     console.log(req.body);

//     const mybodydata = {
//         user_name: req.body.user_name,
//         user_email: req.body.user_email,
//         user_mobile: req.body.user_mobile
//     }
//     var data = SalaModel(mybodydata);
//     //var data = SalaModel(req.body);
//     data.save(function(err) {
//         if (err) {
//             Response.errorResponse(err, res);
           
//         } else {

//             Response.successResponse('User Added!', res, {});
//         }
//     })
// });


// /* GET SINGLE POST BY ID */
// routerSala.get('/get-users-details-api/:id', function(req, res, next) {
//   SalaModel.findById(req.params.id, function (err, post) {
//     if(err){
//       Response.errorResponse(err,res);
//   }else{
//       Response.successResponse('User Detail!',res,post);
//   }
//   });
// });

// /* DELETE POST BY ID */
// routerSala.delete('/delete-users-api', function(req, res, next) {
//   SalaModel.findByIdAndRemove(req.body._id, function (err, post) {
//     if (err) {
//       Response.errorResponse(err,res);
//     } else {
//       Response.successResponse('User deleted!',res,{});
//     }
//   });
// });

// /* UPDATE POST */
// routerSala.post('/update-users-api', function(req, res, next) {
//   console.log(req.body._id);
//   SalaModel.findByIdAndUpdate(req.body._id, req.body, function (err, post) {
//   if (err) {
//     Response.errorResponse(err,res);
//   } else {
//     Response.successResponse('User updated!',res,{});
//   }
// });
// });


module.exports = routerSala;
