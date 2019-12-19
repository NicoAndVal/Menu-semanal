const mongoose = require('mongoose')
    config = require('../config')


class DataBase{
    constructor(){
        this.connect()
    }

    connect(){
        mongoose.connect(process.env.URL_DB,{useNewUrlParser:true,useUnifiedTopology: true})
        .then(() => {
            console.log(`Conexion de base de datos exitosa ${process.env.URL_DB}`)
        }).catch((err) => {
            console.log(`Error en la conexion a la base de datos ${err}`)    
        });
    }
}


module.export = new DataBase();