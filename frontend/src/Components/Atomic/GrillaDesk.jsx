import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import DayContext from '../../Context/Dishes/DayContext'
import { DESAYUNO_LUNES, ALMUEZO_LUNES, CENA_LUNES } from '../../Context/Dishes/actions'
import DishesUserContext from '../../Context/DishesUser/DishesUserContext'
import { REMOVE_DISHES_USER } from '../../Context/DishesUser/action'
let datos2 = ''



const GrillaDesk = ({dia,desayuno,almuerzo,cena}) => {
    
    
    const [, dispatch] = useContext(DayContext)
    let [,dispatchUser] = useContext(DishesUserContext)

    let diaContexto = dia

    
    
    const eliminarCalendario = e => {
        e.preventDefault()
        const confirm = window.confirm('ESTAS SEGURO DE ELIMINAR EL PLATO DEL MENÚ')
        const value = e.target.instancia.value
        if(confirm){
            switch (value) {
                case 'desayuno':
                    switch (dia){
                        case 'LUNES':
                            datos2 = {
                                    "desayuno": '',
                                    "almuerzo": almuerzo,
                                    "cena": cena    
                            }
                            
    
                            dispatchUser({
                                type:REMOVE_DISHES_USER,
                                dia: 'lunes',
                                plato : datos2
    
                            })
                        break;
                        case 'MARTES':
                            datos2 = {
                                    "desayuno": '',
                                    "almuerzo": almuerzo,
                                    "cena": cena    
                            }
    
                            dispatchUser({
                                type:REMOVE_DISHES_USER,
                                dia: 'martes',
                                plato : datos2
    
                            })
                        break;
                        case 'MIERCOLES':
                            datos2 = {
                                    "desayuno": '',
                                    "almuerzo": almuerzo,
                                    "cena": cena    
                            }
    
                            dispatchUser({
                                type:REMOVE_DISHES_USER,
                                dia: 'miercoles',
                                plato : datos2
    
                            })
                        break;
                        case 'JUEVES':
                            datos2 = {
                                    "desayuno": '',
                                    "almuerzo": almuerzo,
                                    "cena": cena    
                            }
    
                            dispatchUser({
                                type:REMOVE_DISHES_USER,
                                dia: 'jueves',
                                plato : datos2
    
                            })
                        break;
                        case 'VIERNES':
                            datos2 = {
                                    "desayuno": '',
                                    "almuerzo": almuerzo,
                                    "cena": cena    
                            }
    
                            dispatchUser({
                                type:REMOVE_DISHES_USER,
                                dia: 'viernes',
                                plato : datos2
    
                            })
                        break;
                        case 'SABADO':
                            datos2 = {
                                    "desayuno": '',
                                    "almuerzo": almuerzo,
                                    "cena": cena    
                            }
    
                            dispatchUser({
                                type:REMOVE_DISHES_USER,
                                dia: 'sabado',
                                plato : datos2
    
                            })
                        break;
                        case 'DOMINGO':
                            datos2 = {
                                    "desayuno": '',
                                    "almuerzo": almuerzo,
                                    "cena": cena    
                            }
    
                            dispatchUser({
                                type:REMOVE_DISHES_USER,
                                dia: 'domingo',
                                plato : datos2
    
                            })
                        break;
                        default:
                            console.log('NO SE ELIMINO NINGÚN PLATO')
                    }
    
                    console.log('SE ELIMINO EL DESAYUNO')
                    break;
    
                case 'almuerzo':
                    switch (dia) {
                        case 'LUNES':
                        datos2 = {
                                "desayuno": desayuno,
                                "almuerzo": '',
                                "cena": cena    
                        }

                        dispatchUser({
                            type:REMOVE_DISHES_USER,
                            dia: 'lunes',
                            plato : datos2

                        })
                    break;
                    case 'MARTES':
                        datos2 = {
                            "desayuno": desayuno,
                            "almuerzo": '',
                            "cena": cena    
                    }

                        dispatchUser({
                            type:REMOVE_DISHES_USER,
                            dia: 'martes',
                            plato : datos2

                        })
                    break;
                    case 'MIERCOLES':
                        datos2 = {
                            "desayuno": desayuno,
                            "almuerzo": '',
                            "cena": cena    
                    }

                        dispatchUser({
                            type:REMOVE_DISHES_USER,
                            dia: 'miercoles',
                            plato : datos2

                        })
                    break;
                    case 'JUEVES':
                        datos2 = {
                            "desayuno": desayuno,
                            "almuerzo": '',
                            "cena": cena    
                    }

                        dispatchUser({
                            type:REMOVE_DISHES_USER,
                            dia: 'jueves',
                            plato : datos2

                        })
                    break;
                    case 'VIERNES':
                        datos2 = {
                            "desayuno": desayuno,
                            "almuerzo": '',
                            "cena": cena    
                    }

                        dispatchUser({
                            type:REMOVE_DISHES_USER,
                            dia: 'viernes',
                            plato : datos2

                        })
                    break;
                    case 'SABADO':
                        datos2 = {
                            "desayuno": desayuno,
                            "almuerzo": '',
                            "cena": cena    
                    }

                        dispatchUser({
                            type:REMOVE_DISHES_USER,
                            dia: 'sabado',
                            plato : datos2

                        })
                    break;
                    case 'DOMINGO':
                        datos2 = {
                            "desayuno": desayuno,
                            "almuerzo": '',
                            "cena": cena    
                    }

                        dispatchUser({
                            type:REMOVE_DISHES_USER,
                            dia: 'domingo',
                            plato : datos2

                        })
                    break;
                        default:
                            console.log('NO SE ELIMINO NINGÚN PLATO')
                    }
    
                    console.log('SE ELIMINO EL ALMUERZO')
                    break;
                case 'cena':
                    switch (dia) {
                        case 'LUNES':
                        datos2 = {
                                "desayuno": desayuno,
                                "almuerzo": almuerzo,
                                "cena": ''    
                        }

                        dispatchUser({
                            type:REMOVE_DISHES_USER,
                            dia: 'lunes',
                            plato : datos2

                        })
                    break;
                    case 'MARTES':
                        datos2 = {
                            "desayuno": desayuno,
                            "almuerzo": almuerzo,
                            "cena": ''    
                    }

                        dispatchUser({
                            type:REMOVE_DISHES_USER,
                            dia: 'martes',
                            plato : datos2

                        })
                    break;
                    case 'MIERCOLES':
                        datos2 = {
                            "desayuno": desayuno,
                            "almuerzo": almuerzo,
                            "cena": ''    
                    }

                        dispatchUser({
                            type:REMOVE_DISHES_USER,
                            dia: 'miercoles',
                            plato : datos2

                        })
                    break;
                    case 'JUEVES':
                        datos2 = {
                            "desayuno": desayuno,
                            "almuerzo": almuerzo,
                            "cena": ''    
                    }

                        dispatchUser({
                            type:REMOVE_DISHES_USER,
                            dia: 'jueves',
                            plato : datos2

                        })
                    break;
                    case 'VIERNES':
                        datos2 = {
                            "desayuno": desayuno,
                            "almuerzo": almuerzo,
                            "cena": ''    
                    }

                        dispatchUser({
                            type:REMOVE_DISHES_USER,
                            dia: 'viernes',
                            plato : datos2

                        })
                    break;
                    case 'SABADO':
                        datos2 = {
                            "desayuno": desayuno,
                            "almuerzo": almuerzo,
                            "cena": ''    
                    }

                        dispatchUser({
                            type:REMOVE_DISHES_USER,
                            dia: 'sabado',
                            plato : datos2

                        })
                    break;
                    case 'DOMINGO':
                        datos2 = {
                            "desayuno": desayuno,
                            "almuerzo": almuerzo,
                            "cena": ''    
                    }

                        dispatchUser({
                            type:REMOVE_DISHES_USER,
                            dia: 'domingo',
                            plato : datos2

                        })
                    break;
                        default:
                            console.log('NO SE ELIMINO NINGÚN PLATO')
                    }
    
                    console.log('SE ELIMINO LA CENA')
                    break;
    
                    
                    default:
                    console.log('NO SE REALIZO NINGUNA ACCIÓN')
            }
        }

    }

    return (
        <div className = 'planificador-comidas'>
             {
                desayuno ?
                    <div className = 'planificador-comidas_contenedor'  >
                        <h4>{desayuno.nombre}</h4>
                        <img className ='planificador-comidas_imagenes' src={require(`../../../public/uploads/${desayuno.img}`)} alt='imagen-comida' />
                        <h6>{desayuno.time}</h6>
                        <h6>{desayuno.porciones}</h6>
                        <form onSubmit={eliminarCalendario}>
                            <input type='text' className ='calendario-comidas_input' name='instancia' defaultValue='desayuno'/>
                            <button 
                                className='btn btn-danger'
                            >
                                ELIMINAR PLATO DEL CALENDARIO</button>
                        </form>
                       
                    </div> :
                    <div className = 'planificador-comidas_contenedor'>
                        <Link className='link' to='/desayunos'>
                            <button
                                onClick={() => dispatch({
                                    type: DESAYUNO_LUNES,
                                    instancia: `DESAYUNO_${diaContexto}`,
                                    dia: diaContexto.toLowerCase()
                                })}
                                className='calendario-comidas-contenedor_boton'
                                type="button"
                            >
                                AGREGAR PLATO</button>
                        </Link>


                    </div>


            }




            {
                almuerzo ?
                    <div className = 'planificador-comidas_contenedor'>
                        <h4>{almuerzo.nombre}</h4>
                        <img className ='planificador-comidas_imagenes' src={require(`../../../public/uploads/${almuerzo.img}`)} alt='imagen-comida' />
                        <h6>{almuerzo.time}</h6>
                        <h6>{almuerzo.porciones}</h6>
                        <form onSubmit={eliminarCalendario}>
                            <input type='text' className ='calendario-comidas_input' name='instancia' defaultValue='almuerzo'/>
                            <button
                                className='btn btn-danger'
                            >
                                ELIMINAR PLATO DEL CALENDARIO</button>
                        </form>
                    </div> :
                    <div className = 'planificador-comidas_contenedor' >

                        <Link className='link' to='/almuerzos'>
                            <button
                                onClick={() => dispatch({
                                    type: ALMUEZO_LUNES,
                                    instancia: `ALMUERZO_${diaContexto}`,
                                    dia: diaContexto.toLowerCase()
                                })}
                                className='calendario-comidas-contenedor_boton'
                                type="button"
                            >
                                AGREGAR PLATO</button>
                        </Link>
                    </div>



            }


            {
                cena ?
                    <div className = 'planificador-comidas_contenedor' >
                        <h4>{cena.nombre}</h4>
                        <img className ='planificador-comidas_imagenes' src={require(`../../../public/uploads/${cena.img}`)} alt='imagen-comida' />
                        <h6>{cena.time}</h6>
                        <h6>{cena.porciones}</h6>
                        <form onSubmit={eliminarCalendario}>
                            <input type='text' className ='calendario-comidas_input' name='instancia' defaultValue='cena'/>
                            <button
                                className='btn btn-danger'
                            >
                                ELIMINAR PLATO DEL CALENDARIO</button>
                        </form>
                    </div> :
                    <div className = 'planificador-comidas_contenedor'>
                        <Link className='link' to='/cenas'>
                            <button
                                onClick={() => dispatch({
                                    type: CENA_LUNES,
                                    instancia: `CENA_${diaContexto}`,
                                    dia: diaContexto.toLowerCase()
                                })}
                                className='calendario-comidas-contenedor_boton'
                                type="button"
                            >
                                AGREGAR PLATO</button>
                        </Link>

                    </div>


            }

        </div>
    )
}

export default GrillaDesk
