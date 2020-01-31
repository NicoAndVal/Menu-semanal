import React, {useReducer,useEffect,useState} from 'react'
import MenuContext from './MenuContext'

const MenuProvider = ({children}) =>{
    const [statePlate, setStatePlate] = useState()

    useEffect(() =>{
        const userLogged = localStorage.getItem('token')
        
        if(userLogged){
            fetch(`http://localhost:5000/api/platos`)
            .then(res => res.json())
            .then(res => {
                 setStatePlate({statePlate:res})
            })
        }
   

       
    },[])

    console.log(statePlate)
    



    const dishesPlateReducer = (state,{type,id}) =>{        
        if (type === 'REMOVE_PLATE') {
            fetch(`http://localhost:5000/api/plato/${id}`, {
                method: 'delete'
            })
            .then(res => res.json())
            .then(res => setStatePlate({statePlate:res}))
        }

            return state
        }

    

    const [, dispatch] = useReducer(dishesPlateReducer,statePlate)

    return (
        <MenuContext.Provider value = {[statePlate,dispatch]}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider