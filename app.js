var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('req-flash');
var cors = require('cors')

//variavel de rotas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cadastroPessoaRouter = require('./routes/cadastroPessoa');
var cadastroSalasRouter = require('./routes/cadastroSalas');
var dadosPessoaRouter = require('./routes/dadosPessoa');
var dadosSalaRouter = require('./routes/dadosSala');
var tabelaPessoaRouter = require('./routes/tabelaPessoa');

var app = express();

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '33693422',
  resave: false,
  saveUninitialized: true
  }));

  app.use(flash());
 
 // Global variables
app.use(function(req, res, next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

//Db Connection Start 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://alyssonAguiar:12345@cluster0.ifsk9.mongodb.net/Formulario?retryWrites=true&w=majority', { useNewUrlParser: true })
//mongoose.connect('mongodb+srv://leojportes:33693422@cluster0.cc09x.mongodb.net/formularion3?retryWrites=true&w=majority', { useNewUrlParser: true })
.then(() => console.log('connection successful'))
.catch((err) => console.error(err))

app.use('/index', indexRouter);
app.use('/', usersRouter);
app.use('/cadastroPessoa', cadastroPessoaRouter);
app.use('/cadastroSalas', cadastroSalasRouter);
app.use('/dadosPessoa', dadosPessoaRouter);
app.use('/dadosSala', dadosSalaRouter);
app.use('/tabelaPessoa', tabelaPessoaRouter); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
