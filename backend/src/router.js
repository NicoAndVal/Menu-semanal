const express = require('express')
    api = express.Router()
    Plato = require('./router/routePlate')


api.get('/',async(req,res) =>{
    await res.status(200).send({
        message: 'Funcionando la api rest'
    })
})

//RUTAS DE LOS PLATOS

api.post('/api/plato', Plato.postPlato)
api.get('/api/platos', Plato.getPlatos)
api.get('/api/plato/:id', Plato.getPlato)
api.delete('/api/plato/:id', Plato.deletePlato)


module.exports = api