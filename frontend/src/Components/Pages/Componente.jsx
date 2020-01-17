import React from 'react'

class Componente extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            platos :[]
        }
    }
    
    
    
    componentDidMount(){
        const userLogged = localStorage.getItem('token')
        fetch(`http://localhost:5000/api/user_plate/${userLogged}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
             this.setState({platos:res})
            })
    }

    render(){
        return(
            <div>
                HOLA
            </div>
        )
    }
}

export default Componente