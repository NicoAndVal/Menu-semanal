const express = require('express')
      app = express()
      config = require('./config')
      morgan = require('morgan')
      path = require('path')
      router = require('./router')
      cors = require('cors')
      multer = require('multer')
      flash = require('connect-flash')
      session = require('express-session')
      passport = require('passport')


//INITIALIZACION
require('./config/passport')

//MIDDLEWARE
app.set('port',process.env.PORT)
    .use(morgan('dev'))
    .use(express.json())
    .use(express.urlencoded({extended:false}))
    .use(cors())
    .use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
        next();
      })
    .use(multer({dest: path.join(__dirname,'../../frontend/public/uploads/temp')}).single('imagen'))
    .use(session({
      secret:'mysecretapp',
      resave:true,
      saveUninitialized:true
      }))
    .use(passport.initialize())
    .use(passport.session())
    .use(flash())

//GLOBAL VARIABLE

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});


app.use('/',router)




module.exports = app