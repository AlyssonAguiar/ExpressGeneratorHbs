var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//variavel de rotas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cadastroPessoasRouter = require('./routes/cadastroPessoa');
var cadastroSalasRouter = require('./routes/cadastroSalas');
var consultaDadosRouter = require('./routes/consultaDados');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//como vai estar o "link" para chamar cada pagina
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cadastroPessoa', cadastroPessoasRouter);
app.use('/cadastroSalas', cadastroSalasRouter);
app.use('/consultaDados', consultaDadosRouter);

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
