const express = require('express')
const { engine } = require('express-handlebars');
const path = require('path');
const logger = require('morgan');
const createError = require('http-errors');

const router = require('./routes/routes');

const app = express()

// const compression = require('compression')
// const helmet = require('helmet');
// app.use(helmet({
//   crossOriginEmbedderPolicy: false,
//   crossOriginOpenerPolicy: false,
//   contentSecurityPolicy:{
//     useDefaults: true,
//     directives: {
//       "img-src": ["'self'", "i.creativecommons.org licensebuttons.net covers.openlibrary.org books.google.com *.archive.org archive.org data:"],
//       // "script-src": ["'self'", "'unsafe-inline'"],
//       "default-src": ["'self'", "www.googleapis.com covers.openlibrary.org *.archive.org archive.org"]
//     }
//   }
// }));


app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.engine('hbs', engine({ extname: '.hbs'}));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// app.use(compression()); //Compress all routes

// Διαδρομές - Routes
app.use('/', router);


app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.errorstatus = err.status || 500;
  res.locals.errorstack = req.app.get('env') === 'development' ? err.stack : '';

  // render the error page
  res.status(err.status || 500);
  res.render('error', {layout:'404.hbs'});
});
  

module.exports = app;
