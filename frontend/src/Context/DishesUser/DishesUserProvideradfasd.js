import React from 'react'
import DishesUserContext from './DishesUserContext'

class DishesUserProvider extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            dishesUser : []
        }
    }
    

    componentDidMount(){
        const userLogged = localStorage.getItem('token')

        fetch(`http://localhost:5000/api/user_plate/${userLogged}`)
        .then(res => res.json())
        .then(res => {
            this.setState({dishesUser:res})
         })

         console.log(this.dishesUser)
    }

    render(){
        return(
            <DishesUserContext.Provider value = {[this.state]}>
            {this.props.children}
             </DishesUserContext.Provider>
        )
    }
}

export default DishesUserProvider