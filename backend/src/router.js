const express = require('express')
    api = express.Router()
    Plato = require('./router/routePlate')
    User = require('./router/routeUser')
    UserPlate = require('./router/routeUserPlate')
    passport = require('passport')

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


//RUTA DE LOS USUARIOS

api.post('/api/newUser', User.postUser)
api.post('/api/postUsers', passport.authenticate('local'),(req,res) =>{
    res.json(req.user._id)
})
api.get('/api/logOutUser', User.userLogout)
api.put('/api/user_plate/:id',User.updateUserPlate)
api.get('/api/user_plate/:id',User.getUserPlate)
api.put('/api/user_plate_remove/:id',User.deleteUserPlate)

//RUTA DE LAS SESIONES
api.post('/api/user_plate',UserPlate.postUserPlate)
api.get('/api/user_plate/:user',UserPlate.getUserPlate)

module.exports = api