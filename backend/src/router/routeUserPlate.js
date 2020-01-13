const UserPlate = require('../models/modelUserPlate')

const postUserPlate = async(req,res) =>{
    const {user,lunes} = req.body
    const userPlate = new UserPlate({user,lunes})
    await userPlate.save()
    res.json('PLATO GUARDADO EN LA BD')
}

const getUserPlate = async(req,res) =>{
    const user = await UserPlate.findOne({user:req.params.user})
    if(user){
        console.log('EL USUARIO ESTÁ EN LA BD')
        res.json(user)
    }else{
        console.log('EL USUARIO NO ESTÁ EN LA BD')
        res.json(false)
    }
}

const updateUserPlate = async(req,res) =>{
    const {user,lunes} = req.body
    const platos = await UserPlate.findOneAndUpdate(req.params.user,{user,lunes})
    res.json(platos)
}


module.exports = {
    postUserPlate,
    getUserPlate,
    updateUserPlate
}