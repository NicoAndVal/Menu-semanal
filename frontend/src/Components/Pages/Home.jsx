import React,{useEffect,useContext} from 'react'
import DishesUserContext from '../../Context/DishesUser/DishesUserContext'
import { ADD_DISHES_USER } from '../../Context/DishesUser/action'



const Home = () => {

    const userLogged = localStorage.getItem('token')
   
    const [menuesUser,dispatch] = useContext(DishesUserContext)

    console.log(menuesUser)   

    return (
        <div>
            <h1>HOME</h1> 
        </div>
    )
}

export default Home
