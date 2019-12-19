const express = require('express')
      app = express()
      config = require('./config')
      morgan = require('morgan')
      path = require('path')
      router = require('./router')
      cors = require('cors')
      multer = require('multer')


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

app.use('/',router)



module.exports = app