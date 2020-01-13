import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DayContext from '../../Context/Dishes/DayContext'
import { DESAYUNO_LUNES, ALMUEZO_LUNES, CENA_LUNES } from '../../Context/Dishes/actions'



const GrillaMobil = ({ dia, desayuno, almuerzo, cena }) => {

    const [, dispatch] = useContext(DayContext)

    let diaContexto = dia

    let platos = {
        "desayuno": desayuno,
        "almuerzo": almuerzo,
        "cena": cena
    }

    const userLogged = localStorage.getItem('token')


    //SE UTILIZA EN EL CASO DE QUERER USAR EL LUNES COMO HOME
    // if (diaContexto === 'LUNES') {
    //     diaContexto = ''
    // }


    const eliminarCalendario = e => {
        e.preventDefault()
        const value = e.target.instancia.value
        switch (value) {
            case 'desayuno':
                platos = {
                    user: userLogged,
                    lunes: {
                        "desayuno": '',
                        "almuerzo": almuerzo,
                        "cena": cena
                    }
                }
                console.log('SE ELIMINO EL DESAYUNO')
                break;
            case 'almuerzo':
                platos = {
                    user: userLogged,
                    lunes: {
                        "desayuno":desayuno,
                        "almuerzo": '',
                        "cena": cena
                    }
                }
                console.log('SE ELIMINO EL ALMUERZO')
                break;
            case 'cena':
                platos = {
                    user: userLogged,
                    lunes: {
                        "desayuno": desayuno,
                        "almuerzo": almuerzo,
                        "cena":''
                    }
                }
                console.log('SE ELIMINO EL CENA')
                break;
            default:
                console.log('NO SE REALIZO NINGUNA ACCIÓN')
        }
        console.log(platos)

        const confirm = window.confirm('ESTAS SEGURO DE ELIMINAR EL PLATO DEL MENÚ')
        
        if(confirm){
            fetch(`http://localhost:5000/api/user_plate/${userLogged}`,{
                method:'PUT',
                body: JSON.stringify(platos),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(res =>res.json())
            .then(res =>{

                window.location =(`http://localhost:3000/${dia.toLowerCase()}`)
            })
        }
        console.log(desayuno,almuerzo,cena)


    }

    return (
        <>
            <div className='calendario_instancia'>DÍA</div>
            <div className='calendario_dias lunes'>{dia}</div>
            <div className='calendario_instancia desayuno'> <span className='calendario_comida'>DESAYUNO </span> </div>
            {
                desayuno ?
                    <div className='calendario-comidas_plato'>
                        <h4 className='calendario-comidas_title'>{desayuno.nombre}</h4>
                        <img className='calendario-comidas_imagen' src={require(`../../../public/uploads/${desayuno.img}`)} alt='imagen-comida' />
                        <h6 className='calendario-comidas_title'>{desayuno.time}</h6>
                        <h6 className='calendario-comidas_title'>{desayuno.porciones}</h6>
                        <form onSubmit={eliminarCalendario}>
                            <input type='text' className ='calendario-comidas_input' name='instancia' defaultValue='desayuno'/>
                            <button
                                className='btn btn-danger'
                            >
                                ELIMINAR PLATO DEL CALENDARIO</button>
                        </form>
                       
                    </div> :
                    <div className='calendario-comidas-contenedor'>
                        <Link className='link' to='/menues'>
                            <button
                                onClick={() => dispatch({
                                    type: DESAYUNO_LUNES,
                                    instancia: 'DESAYUNO',
                                    dia: diaContexto.toLowerCase()
                                })}
                                className='calendario-comidas-contenedor_boton'
                                type="button"
                            >
                                AGREGAR MENU</button>
                        </Link>


                    </div>


            }



            <div className='calendario_instancia almuerzo'> <span className='calendario_comida'>ALMUERZO </span> </div>

            {
                almuerzo ?
                    <div className='calendario-comidas_plato'>
                        <h4 className='calendario-comidas_title'>{almuerzo.nombre}</h4>
                        <img className='calendario-comidas_imagen' src={require(`../../../public/uploads/${almuerzo.img}`)} alt='imagen-comida' />
                        <h6 className='calendario-comidas_title'>{almuerzo.time}</h6>
                        <h6 className='calendario-comidas_title'>{almuerzo.porciones}</h6>
                        <form onSubmit={eliminarCalendario}>
                            <input type='text' className ='calendario-comidas_input' name='instancia' defaultValue='almuerzo'/>
                            <button
                                className='btn btn-danger'
                            >
                                ELIMINAR PLATO DEL CALENDARIO</button>
                        </form>
                    </div> :
                    <div className='calendario-comidas-contenedor'>

                        <Link className='link' to='/menues'>
                            <button
                                onClick={() => dispatch({
                                    type: ALMUEZO_LUNES,
                                    instancia: 'ALMUERZO',
                                    dia: diaContexto.toLowerCase()
                                })}
                                className='calendario-comidas-contenedor_boton'
                                type="button"
                            >
                                AGREGAR MENU</button>
                        </Link>
                    </div>



            }


            <div className='calendario_instancia cena'> <span className='calendario_comida'>CENA </span> </div>
            {
                cena ?
                    <div className='calendario-comidas_plato'>
                        <h4 className='calendario-comidas_title'>{cena.nombre}</h4>
                        <img className='calendario-comidas_imagen' src={require(`../../../public/uploads/${cena.img}`)} alt='imagen-comida' />
                        <h6 className='calendario-comidas_title'>{cena.time}</h6>
                        <h6 className='calendario-comidas_title'>{cena.porciones}</h6>
                        <form onSubmit={eliminarCalendario}>
                            <input type='text' className ='calendario-comidas_input' name='instancia' defaultValue='cena'/>
                            <button
                                className='btn btn-danger'
                            >
                                ELIMINAR PLATO DEL CALENDARIO</button>
                        </form>
                    </div> :
                    <div className='calendario-comidas-contenedor'>
                        <Link className='link' to='/menues'>
                            <button
                                onClick={() => dispatch({
                                    type: CENA_LUNES,
                                    instancia: 'CENA',
                                    dia: diaContexto.toLowerCase()
                                })}
                                className='calendario-comidas-contenedor_boton'
                                type="button"
                            >
                                AGREGAR MENU</button>
                        </Link>

                    </div>


            }

        </>
    )

}

export default GrillaMobil