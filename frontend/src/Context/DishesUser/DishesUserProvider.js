import React, {useReducer,useEffect,useState} from 'react'
import DishesUserContext from './DishesUserContext'
import {ADD_DISHES_USER,REMOVE_DISHES_USER} from './action'

const DishesUserProvider = ({children}) =>{
    
    
    const [stateUser, setStateUser] = useState()
    
    
    const userLogged = localStorage.getItem('token')
    
    useEffect(() =>{
        const userLogged = localStorage.getItem('token')
        
        if(userLogged){
            fetch(`http://localhost:5000/api/user_plate/${userLogged}`)
            .then(res => res.json())
            .then(res => {
                 setStateUser({stateUser:res})
            })
        }
   

       
    },[])
    



    const dishesUserReducer = (state,{type,dia,plato}) =>{
        if(type ===ADD_DISHES_USER){
            if(dia ==='agregar'){
                fetch(`http://localhost:5000/api/user_plate/${userLogged}`, {
                    method: 'PUT',
                    body: JSON.stringify(plato),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(res =>{
                        setStateUser({stateUser:res})
                    })
            }

        }

        
            if(type === REMOVE_DISHES_USER){
                let datos = {
                    dia:dia,
                    plato: plato
                }
                fetch(`http://localhost:5000/api/user_plate_remove/${userLogged}`, {
                    method: 'PUT',
                    body: JSON.stringify(datos),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                .then(res =>{
                    setStateUser({stateUser:res})
                })
            }

            return state
        }

    

    const [, dispatch] = useReducer(dishesUserReducer,stateUser)

    return (
        <DishesUserContext.Provider value = {[stateUser,dispatch]}>
            {children}
        </DishesUserContext.Provider>
    )
}

export default DishesUserProvider