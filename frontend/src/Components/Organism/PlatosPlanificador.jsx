import React,{useContext} from 'react'
import DayContext from '../../Context/Dishes/DayContext'
import MenuContext from '../../Context/MenuContext'
import CartContext from '../../Context/Cart/CartContext'
import DishesUserContext from '../../Context/DishesUser/DishesUserContext'
import { ADD_DISHES_USER } from '../../Context/DishesUser/action'
import GrillaDesk from '../Atomic/GrillaDesk'


let desayuno = ''
let almuerzo = ''
let cena = ''
let martes = ''
let miercoles = ''
let jueves = ''
let viernes = ''
let sabado = ''
let domingo = ''
let lunes = ''
let datos2


const PlatosPlanificador = () =>{
    let [stateUser, dispatch] = useContext(DishesUserContext)
    
    const [state] = useContext(CartContext)  //AQUI SE GUARDA EL VALOR DEL PLATO A AGREGAR EN EL MENÚ (SE DEBE ACCEDER AL .CART)
    const { menues } = useContext(MenuContext) //ESTAN TODOS LOS PLATOS DE LA BASE DE DATOS
    const [stateDay] = useContext(DayContext) //SE SEPARAN LAS INSTANCIAS Y EL DÍA A QUE CORRESPONDE 
    
    
    const userLogged = localStorage.getItem('token')
    
    if (stateUser) {
        //SE OBTIENEN LOS PLATOS DEL CONTEXTO
        lunes = stateUser.stateUser.lunes
        martes = stateUser.stateUser.martes
        miercoles = stateUser.stateUser.miercoles
        jueves = stateUser.stateUser.jueves
        viernes = stateUser.stateUser.viernes
        sabado = stateUser.stateUser.sabado
        domingo = stateUser.stateUser.domingo

    }

    console.log(miercoles)

    //SE AGREGAN LOS DESAYUNOS

    switch (stateDay.desayunos) {
        //LUNES
        case 'DESAYUNO_LUNES':
            desayuno = menues.find(m => m._id === state.cart)
            stateDay.desayunos = ''
            console.log('ENTRO AL DESAYUNO DEL LUNES')
             datos2 = {
                user: userLogged,
                martes,
                lunes: {
                    "desayuno": desayuno,
                    "almuerzo": lunes.almuerzo,
                    "cena": lunes.cena
                },
                miercoles,
                jueves,
                viernes,
                sabado,
                domingo
            }
            console.log(datos2)


            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2

            })
            break;

        //MARTES
        case 'DESAYUNO_MARTES':
            desayuno = menues.find(m => m._id === state.cart)

            stateDay.desayunos = ''
            console.log('ENTRO AL DESAYUNO DEL MARTES')

             datos2 = {
                user: userLogged,
                lunes,
                martes: {
                    "desayuno":desayuno,
                    "almuerzo": martes.almuerzo,
                    "cena": martes.cena
                },
                miercoles,
                jueves,
                viernes,
                sabado,
                domingo
            }


            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2

            })
            break;
        //MIERCOLES
        case 'DESAYUNO_MIERCOLES':
            desayuno = menues.find(m => m._id === state.cart)
            stateDay.desayunos = ''
            console.log('ENTRO AL DESAYUNO DEL MIERCOLES')
             datos2 = {
                user: userLogged,
                martes,
                miercoles: {
                    "desayuno": desayuno,
                    "almuerzo": miercoles.almuerzo,
                    "cena": miercoles.cena
                },
                lunes,
                jueves,
                viernes,
                sabado,
                domingo
            }

            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2

            })
            break;

        //JUEVES
        case 'DESAYUNO_JUEVES':
            desayuno = menues.find(m => m._id === state.cart)

            stateDay.desayunos = ''
            console.log('ENTRO AL DESAYUNO DEL JUEVES')

             datos2 = {
                user: userLogged,
                lunes,
                jueves: {
                    "desayuno":desayuno,
                    "almuerzo": jueves.almuerzo,
                    "cena": jueves.cena
                },
                miercoles,
                martes,
                viernes,
                sabado,
                domingo
            }


            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2

            })
            break;
        //VIERNES
        case 'DESAYUNO_VIERNES':
            desayuno = menues.find(m => m._id === state.cart)
            stateDay.desayunos = ''
            console.log('ENTRO AL DESAYUNO DEL VIERNES')
             datos2 = {
                user: userLogged,
                martes,
                viernes: {
                    "desayuno": desayuno,
                    "almuerzo": viernes.almuerzo,
                    "cena": viernes.cena
                },
                miercoles,
                jueves,
                lunes,
                sabado,
                domingo
            }
            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2

            })
            break;

        //SABADO
        case 'DESAYUNO_SABADO':
            desayuno = menues.find(m => m._id === state.cart)

            stateDay.desayunos = ''
            console.log('ENTRO AL DESAYUNO DEL SABADO')

             datos2 = {
                user: userLogged,
                lunes,
                sabado: {
                    "desayuno":desayuno,
                    "almuerzo": sabado.almuerzo,
                    "cena": sabado.cena
                },
                miercoles,
                jueves,
                viernes,
                martes,
                domingo
            }


            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2

            })
            break;
        //DOMINGO
        case 'DESAYUNO_DOMINGO':
            desayuno = menues.find(m => m._id === state.cart)

            stateDay.desayunos = ''
            console.log('ENTRO AL DESAYUNO DEL DOMINGO')

             datos2 = {
                user: userLogged,
                lunes,
                domingo: {
                    "desayuno":desayuno,
                    "almuerzo": domingo.almuerzo,
                    "cena": domingo.cena
                },
                miercoles,
                jueves,
                viernes,
                sabado,
                martes
            }


            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2

            })
            break;

       
        default:
            break;
    }



    //SE AGREGAN LOS ALMUERZOS

    switch (stateDay.almuerzos) {
        //LUNES
        case 'ALMUERZO_LUNES':
            almuerzo = menues.find(m => m._id === state.cart)
            stateDay.almuerzos = ''
            console.log('ENTRO AL ALMUERZO DEL DÍA LUNES')
            datos2 = {
                user: userLogged,
                martes,
                lunes: {
                    "desayuno": lunes.desayuno,
                    "almuerzo": almuerzo,
                    "cena": lunes.cena
                },
                miercoles,
                jueves,
                viernes,
                sabado,
                domingo
            }
            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2
            })
            break;
        //MARTES
        case 'ALMUERZO_MARTES':
            almuerzo = menues.find(m => m._id === state.cart)
            stateDay.almuerzos = ''
            console.log('ENTRO AL ALMUERZO DEL DÍA MARTES')
            datos2 = {
                user: userLogged,
                lunes   ,
                martes: {
                    "desayuno": martes.desayuno,
                    "almuerzo": almuerzo,
                    "cena": martes.cena
                },
                miercoles,
                jueves,
                viernes,
                sabado,
                domingo
            }
            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2
            })
            break;
        //MIERCOLES
        case 'ALMUERZO_MIERCOLES':
            almuerzo = menues.find(m => m._id === state.cart)
            stateDay.almuerzos = ''
            console.log('ENTRO AL ALMUERZO DEL DÍA MIERCOLES')
            datos2 = {
                user: userLogged,
                martes,
                miercoles: {
                    "desayuno": miercoles.desayuno,
                    "almuerzo": almuerzo,
                    "cena": miercoles.cena
                },
                lunes,
                jueves,
                viernes,
                sabado,
                domingo
            }
            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2
            })
            break;
        //JUEVES
        case 'ALMUERZO_JUEVES':
            almuerzo = menues.find(m => m._id === state.cart)
            stateDay.almuerzos = ''
            console.log('ENTRO AL ALMUERZO DEL DÍA JUEVES')
            datos2 = {
                user: userLogged,
                lunes,
                jueves: {
                    "desayuno": jueves.desayuno,
                    "almuerzo": almuerzo,
                    "cena": jueves.cena
                },
                miercoles,
                martes,
                viernes,
                sabado,
                domingo
            }
            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2
            })
            break;
        //VIERNES
        case 'ALMUERZO_VIERNES':
            almuerzo = menues.find(m => m._id === state.cart)
            stateDay.almuerzos = ''
            console.log('ENTRO AL ALMUERZO DEL DÍA VIERNES')
            datos2 = {
                user: userLogged,
                martes,
                viernes: {
                    "desayuno": viernes.desayuno,
                    "almuerzo": almuerzo,
                    "cena": viernes.cena
                },
                miercoles,
                jueves,
                lunes,
                sabado,
                domingo
            }
            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2
            })
            break;
        //SABADO
        case 'ALMUERZO_SABADO':
            almuerzo = menues.find(m => m._id === state.cart)
            stateDay.almuerzos = ''
            console.log('ENTRO AL ALMUERZO DEL DÍA SABADO')
            datos2 = {
                user: userLogged,
                lunes   ,
                sabado: {
                    "desayuno": sabado.desayuno,
                    "almuerzo": almuerzo,
                    "cena": sabado.cena
                },
                miercoles,
                jueves,
                viernes,
                martes,
                domingo
            }
            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2
            })
            break;
        //DOMINGO
        case 'ALMUERZO_DOMINGO':
            almuerzo = menues.find(m => m._id === state.cart)
            stateDay.almuerzos = ''
            console.log('ENTRO AL ALMUERZO DEL DÍA DOMINGO')
            datos2 = {
                user: userLogged,
                lunes,
                domingo: {
                    "desayuno": domingo.desayuno,
                    "almuerzo": almuerzo,
                    "cena": domingo.cena
                },
                miercoles,
                jueves,
                viernes,
                martes,
            }
            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2
            })
            break;

        default:
            break;
        
    }
    //SE AGREGAN LAS CENAS

    switch (stateDay.cenas) {
        //LUNES
        case 'CENA_LUNES':
            cena = menues.find(m => m._id === state.cart)
            stateDay.cenas = ''
            console.log('ENTRO A LA CENA DEL LUNES')
            datos2 = {
                user: userLogged,
                martes,
                lunes: {
                    "desayuno": lunes.desayuno,
                    "almuerzo": lunes.almuerzo,
                    "cena": cena
                },
                miercoles,
                jueves,
                viernes,
                sabado,
                domingo
            }
            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2
            })
            break;
        //MARTES
        case 'CENA_MARTES':
            cena = menues.find(m => m._id === state.cart)
            stateDay.cenas = ''
            console.log('ENTRO A LA CENA MARTES')
            datos2 = {
                user: userLogged,
                lunes,
                martes: {
                    "desayuno": martes.desayuno,
                    "almuerzo": martes.almuerzo,
                    "cena": cena
                },
                miercoles,
                jueves,
                viernes,
                sabado,
                domingo
            }
            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2
            })
            break;
        //MIERCOLES
        case 'CENA_MIERCOLES':
            cena = menues.find(m => m._id === state.cart)
            stateDay.cenas = ''
            console.log('ENTRO A LA CENA DEL MIERCOLES')
            datos2 = {
                user: userLogged,
                martes,
                miercoles: {
                    "desayuno": miercoles.desayuno,
                    "almuerzo": miercoles.almuerzo,
                    "cena": cena
                },
                lunes,
                jueves,
                viernes,
                sabado,
                domingo
            }
            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2
            })
            break;
        //JUEVES
        case 'CENA_JUEVES':
            cena = menues.find(m => m._id === state.cart)
            stateDay.cenas = ''
            console.log('ENTRO A LA CENA JUEVES')
            datos2 = {
                user: userLogged,
                lunes,
                jueves: {
                    "desayuno": jueves.desayuno,
                    "almuerzo": jueves.almuerzo,
                    "cena": cena
                },
                miercoles,
                martes,
                viernes,
                sabado,
                domingo
            }
            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2
            })
            break;
        //VIERNES
        case 'CENA_VIERNES':
            cena = menues.find(m => m._id === state.cart)
            stateDay.cenas = ''
            console.log('ENTRO A LA CENA DEL VIERNES')
            datos2 = {
                user: userLogged,
                martes,
                viernes: {
                    "desayuno": viernes.desayuno,
                    "almuerzo": viernes.almuerzo,
                    "cena": cena
                },
                miercoles,
                jueves,
                lunes,
                sabado,
                domingo
            }
            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2
            })
            break;
        //SABADO
        case 'CENA_SABADO':
            cena = menues.find(m => m._id === state.cart)
            stateDay.cenas = ''
            console.log('ENTRO A LA CENA SABADO')
            datos2 = {
                user: userLogged,
                lunes,
                sabado: {
                    "desayuno": sabado.desayuno,
                    "almuerzo": sabado.almuerzo,
                    "cena": cena
                },
                martes,
                jueves,
                viernes,
                miercoles,
                domingo
            }
            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2
            })
            break;
        //DOMINGO
        case 'CENA_DOMINGO':
            cena = menues.find(m => m._id === state.cart)
            stateDay.cenas = ''
            console.log('ENTRO A LA CENA DOMINGO')
            datos2 = {
                user: userLogged,
                lunes,
                domingo: {
                    "desayuno": domingo.desayuno,
                    "almuerzo": domingo.almuerzo,
                    "cena": cena
                },
                martes,
                jueves,
                viernes,
                sabado,
            }
            dispatch({
                type: ADD_DISHES_USER,
                dia: 'agregar',
                plato: datos2
            })
            break;
        default:
            break;
        
    }



    
    return (
        <>
        
        {
            lunes ? <GrillaDesk dia='LUNES' desayuno={lunes.desayuno} almuerzo={lunes.almuerzo} cena={lunes.cena} /> :<GrillaDesk dia='LUNES' desayuno={desayuno} almuerzo={almuerzo} cena={cena} />
        }

        {
            martes ? <GrillaDesk dia='MARTES' desayuno={martes.desayuno} almuerzo={martes.almuerzo} cena={martes.cena} /> :<GrillaDesk dia='MARTES' desayuno={desayuno} almuerzo={almuerzo} cena={cena} />
        }

        {
            miercoles ? <GrillaDesk dia='MIERCOLES' desayuno={miercoles.desayuno} almuerzo={miercoles.almuerzo} cena={miercoles.cena} /> :<GrillaDesk dia='MIERCOLES' desayuno={desayuno} almuerzo={almuerzo} cena={cena} />
        }

        {
            jueves ? <GrillaDesk dia='JUEVES' desayuno={jueves.desayuno} almuerzo={jueves.almuerzo} cena={jueves.cena} /> :<GrillaDesk dia='JUEVES' desayuno={desayuno} almuerzo={almuerzo} cena={cena} />
        }

        {
            viernes ? <GrillaDesk dia='VIERNES' desayuno={viernes.desayuno} almuerzo={viernes.almuerzo} cena={viernes.cena} /> :<GrillaDesk dia='VIERNES' desayuno={desayuno} almuerzo={almuerzo} cena={cena} />
        }

        {
            sabado ? <GrillaDesk dia='SABADO' desayuno={sabado.desayuno} almuerzo={sabado.almuerzo} cena={sabado.cena} /> :<GrillaDesk dia='SABADO' desayuno={desayuno} almuerzo={almuerzo} cena={cena} />
        }

        {
            domingo ? <GrillaDesk dia='DOMINGO' desayuno={domingo.desayuno} almuerzo={domingo.almuerzo} cena={domingo.cena} /> :<GrillaDesk dia='DOMINGO' desayuno={desayuno} almuerzo={almuerzo} cena={cena} />
        }
        </>
    )
}

export default PlatosPlanificador