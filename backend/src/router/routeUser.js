const User = require('../models/modelUser')
const passport = require('passport')

const postUser = async(req,res) =>{
    const {nombre,email,password,confirm_password} = req.body
    let errors = []

    if(nombre.length<=0){
        errors.push({text:'POR FAVOR AGREGUE SU NOMBRE'})
        console.log(errors)
    }
    if(password != confirm_password){
        errors.push({text:'LAS CONTRASEÑAS NO COINCIDEN'})
        console.log(errors)

    }
    if(password.length<=4){
        errors.push({text:'LA CONTRASEÑA DEBE TENER AL MENOS 4 CARACTERES'})
        console.log(errors)

    }

    if(errors.length>0){
        res.send('HUBO UN ERROR')
        console.log(errors)

    }else{
        const emailUser = await User.findOne({email:email})
        if(emailUser){
            req.flash('error_msg','El correo ya está en uso')
            res.json("EL EMAIL YA ESTÁ EN NUESTRA BASE DE DATOS")
        } else{
            const newUser = new User({nombre,email,password})
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save()
            req.flash('success_msg', 'Estas Registrado')
            res.json("USUARIO REGISTRADO EXITOSAMENTE")
        }
    }
}

const postSignIn = passport.authenticate('local',{
    successRedirect:'http://localhost:3000',
    failureRedirect:'http://localhost:3000/registro',
    failureFlash:true
})

const updateUserPlate = async(req,res) =>{
    const {lunes,martes,miercoles,jueves,viernes,sabado,domingo} = req.body
    console.log(req.params.id)
    const platos = await User.findByIdAndUpdate(req.params.id,{lunes,martes,miercoles,jueves,viernes,sabado,domingo})
    res.json(platos)
}


const getUserPlate = async(req,res)  =>{
    const {user} = req.params.id
    const userFind = await User.findOne(user)
    res.json(userFind)

}

const userLogout = (req,res,next) =>{
    req.logOut()
    console.log('EL USUARIO HA CERRADO SESION')
}


module.exports = {
    postUser,
    postSignIn,
    userLogout,
    updateUserPlate,
    getUserPlate
}