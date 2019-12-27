import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import CartContext from '../../Context/Cart/CartContext'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../Context/Cart/action'

const CartMenues = ({ id, nombre, elaboracion, time, porciones, instancia, imagen }) => {

    const [state,dispatch] = useContext(CartContext)

    return (
        <div className="card cardMenues" key={id}>
            <div className="card-body">
                <img className="card-img-top grid-menus_imagen " src={require(`../../../public/uploads/${imagen}`)} alt={nombre} />

                <h4 className="card-title">{nombre}</h4>
                <h6 className="card-title">{time}</h6>
                <h6 className="card-title">{porciones}</h6>
                <h6 className="card-title">{instancia}</h6>

                {
                    state.cart.find(m => m === id)?
                    <button onClick={() =>dispatch({
                        type: REMOVE_FROM_CART,
                        menues: id
                    })} className="btn btn-danger cartMenues_ver" >REMOVER DEL CARRITO</button>
                    :
                    <button onClick={() =>dispatch({
                        type: ADD_TO_CART,
                        menues: id
                    })} className="btn btn-success cartMenues_ver" >Agregar</button>
                }

               

                {/* <form id={id} className='grid-menus_button'>
                    <button onClick={() => dispatch({
                        type: ADD_TO_CART,
                        menues: id
                    })} className="btn btn-success cartMenues_ver" >Agregar</button>
                    <button className="btn btn-danger">Eliminar</button>
                </form> */}
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
    imagen: PropTypes.String
}

CartMenues.defaultProps = {
    nombre: 'EL MENÚ NO TIENE NOMBRE',
    time: 'SIN TIEMPO DEFINIDO',
    porciones: 'SIN PORCIONES DEFINIDAS',
    instancia: 'SIN INSTANCIA DEFINIDA',
    imagen: "https://2.bp.blogspot.com/-eXwVHV7P_30/XDQIbR_2-yI/AAAAAAAAdCE/4hOAw2cARlUdkxTe3cV7NZnlOmSWuWYfwCLcBGAs/s1600/liderazgo%2Beducativo%2Bcurso%2Bonline%2Bgratis.jpg",
    elaboracion: 'SIN ELABORACIÓN DEFINIDA'
}


export default CartMenues
