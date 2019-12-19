const mongoose = require('mongoose')
    Schema = mongoose.Schema

const PlatoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del plato es requerido']
    },
    elaboracion:{
        type:String,
        required: [true,'Es necesario ingresar la elaboracion de la receta']

    },
    instancia:{
        type: String,
        enum:['Desayuno','Almuerzo','Cena']
    },

    time: String,
    porciones: String,
    img: String

})


module.exports = mongoose.model('Plato', PlatoSchema)

