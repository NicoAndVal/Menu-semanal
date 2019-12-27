import React from 'react'
import {Link} from 'react-router-dom'

class Almuerzos extends React.Component{

    constructor(props){
        super(props)
        this.state = {almuerzos:[]}
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/platos')
        .then(res =>res.json())
        .then(res =>{
            
            this.setState({
                almuerzos:res.data
            })
        })
    }
    render(){
        console.log(this.state.almuerzos)
        const arrayAlmuerzos = []
        this.state.almuerzos.map(almuerzo =>{
            if(almuerzo.instancia ==='Almuerzo'){
                arrayAlmuerzos.push(almuerzo)
            }
            return arrayAlmuerzos
        })

        console.log(arrayAlmuerzos)

        const showLunch = arrayAlmuerzos.map(almuerzo =>{
            return(
                <div key={almuerzo._id} className='calendario-comidas_plato'>
                    <h5> {almuerzo.nombre} </h5>
                    <Link to={`/menu/${almuerzo._id}`}><img className='calendario-comidas_imagen'  alt='imagen-almuerzo' src={require(`../../../public/uploads/${almuerzo.img}`)}/></Link>
                    <h6 className ='parrafo' >{almuerzo.time}</h6>
                </div>
            )
        })

        const randomLunch = showLunch.sort(() => Math.random()-0.5)
       
        return(
            <div className='calendario-comidas'>
                {randomLunch.slice(0,7)}
            </div>
        )
    }
}

export default Almuerzos