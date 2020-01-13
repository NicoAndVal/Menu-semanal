const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserPlateSchema = new Schema({
    user:{type:String,required:[true,'ES NECESARIO EL ID DE UN USUARIO'],  unique: true},
    lunes: {type:Object},
    marte: {type:Object},
    miercoles: {type:Object},
    jueves: {type:Object},
    sabado: {type:Object},
    domingo: {type:Object}
})

module.exports = mongoose.model('UserPlate',UserPlateSchema)