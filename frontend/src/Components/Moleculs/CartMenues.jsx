import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import CartContext from '../../Context/Cart/CartContext'
import { ADD_TO_CART} from '../../Context/Cart/action'
import { Link } from 'react-router-dom'
import DayContext from '../../Context/Dishes/DayContext'


const CartMenues = ({ id, nombre, elaboracion, time, porciones, instancia, imagen }) => {
    
    const [,dispatch] = useContext(CartContext)
    const [stateDay] = useContext(DayContext)
    
    let validarPedido = false 
        
    if(stateDay.desayunos || stateDay.almuerzos || stateDay.cenas){
        validarPedido = true
    }
    
    return (
        <div className="card cardMenues" key={id}>
            <div className="card-body">
                <img className="card-img-top grid-menus_imagen " src={require(`../../../public/uploads/${imagen}`)} alt={nombre} />
                <h4 className="card-title">{nombre}</h4>
                <h6 className="card-title">{time}</h6>
                <h6 className="card-title">{porciones}</h6>
                <h6 className="card-title">{instancia}</h6>
                {
                    validarPedido ?

                        <Link to={`/${stateDay.dia}`}>
                                <button onClick={() =>
                                dispatch({
                                    type: ADD_TO_CART,
                                    menues: id
                                })

                            } className="btn btn-success cartMenues_ver">AGREGAR AL CALENDARIO
                            </button>
                        </Link> :
                        <form >
                            <Link to={`/menu/${id}`}>
                                <button className="btn btn-success calendario-comidas_ver"
                                    onClick = {() =>{
                                        dispatch({
                                            type:ADD_TO_CART,
                                            menues: id
                                        })
                                    }}
                                >VER</button>
                            
                            </Link>
                            <button className="btn btn-danger">ELIMINAR</button>
                        </form>
                }
            </div>
        </div>
    )
}

CartMenues.prototype = {
    id: PropTypes.String,
    nombre: PropTypes.String,
    time: PropTypes.String,
    porciones: PropTypes.String,
    instancia: PropTypes.String,
    imagen: PropTypes.String,
    dia: PropTypes.String
}

CartMenues.defaultProps = {
    nombre: 'EL MENÚ NO TIENE NOMBRE',
    time: 'SIN TIEMPO DEFINIDO',
    porciones: 'SIN PORCIONES DEFINIDAS',
    instancia: 'SIN INSTANCIA DEFINIDA',
    imagen: "https://2.bp.blogspot.com/-eXwVHV7P_30/XDQIbR_2-yI/AAAAAAAAdCE/4hOAw2cARlUdkxTe3cV7NZnlOmSWuWYfwCLcBGAs/s1600/liderazgo%2Beducativo%2Bcurso%2Bonline%2Bgratis.jpg",
    elaboracion: 'SIN ELABORACIÓN DEFINIDA',
    dia: '/'
}


export default CartMenues
