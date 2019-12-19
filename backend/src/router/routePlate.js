const Plato = require('../models/modelPlate')
const {randomNumber}  = require('../helpers/libs')
const fs = require('fs-extra')
const path = require('path')

const apiResponse = (req,res,err,data) =>{
    if(err){
        res.status(500).send({
            message:`Error interno del servidor.${err.message}`
        })
    }else{
        if(data){
            res.status(200).send({data})
        }else{
            res.status(404).send({
                message: `No existen datos en la api con tus datos`
            })
        }
    }
}


const postPlato = (req,res) =>{
    const guardarPlato = async() =>{
        const urlImg = randomNumber()
        const imagen = Plato.find({img: urlImg})

        if( imagen.length > 0){
            guardarPlato()
        }else{
            //dirección imagen
            console.log(req.file)
            const direccionImagen = req.file.path
            const ext  = path.extname(req.file.originalname).toLowerCase()
            const targetPath = path.resolve(`../frontend/public/uploads/${urlImg}${ext}`)

            //validacion de extension
            if(ext ==='.jpg' || ext ==='.jpeg' || ext ==='.gif' || ext ==='.png'){
                await fs.rename(direccionImagen, targetPath)
                const newPlato = new Plato({
                    nombre: req.body.nombre,
                    elaboracion : req.body.elaboracion,
                    time : req.body.time,
                    instancia: req.body.instancia,
                    porciones: req.body.porciones,
                    img: urlImg + ext
                })

                await newPlato.save()
            }
        }
    }

    guardarPlato()
}




const getPlatos = async (req,res) =>{
    await Plato.find()
    .exec((err,data) => apiResponse(req,res,err,data))
}

const getPlato = async (req,res) =>{
    await Plato.findById({_id: req.params.id})
    .exec((err,data) => apiResponse(req,res,err,data))
}

const deletePlato = async(req,res) =>{
    await Plato.findByIdAndDelete({_id:req.params.id}, (err,data) => apiResponse(req,res,err,data))
}


module.exports ={
    postPlato,
    getPlatos,
    getPlato,
    deletePlato
}
