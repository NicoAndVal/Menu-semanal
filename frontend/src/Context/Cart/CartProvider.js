import React,{useReducer} from 'react'
import CartContext from './CartContext'
import { ADD_TO_CART, REMOVE_FROM_CART } from './action'

const CartProvider = ({children}) =>{

    const initialState = {
        cart: ''
    }

    const cartReducer = (state,{type,menues}) =>{
        if(type ===ADD_TO_CART){
            return{

                cart : menues,
            }
        }

        if(type === REMOVE_FROM_CART){
            return{
                cart: state.cart.filter(c => c !==menues)
            }
        }
        return state
    }

    const [state, dispatch] = useReducer(cartReducer, initialState)


    return (
        <CartContext.Provider value={[state, dispatch]}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider