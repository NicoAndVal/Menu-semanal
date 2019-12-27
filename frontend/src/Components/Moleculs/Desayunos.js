import React from 'react'
import {Link} from 'react-router-dom'



class Desayunos extends React.Component{

    
    constructor(props){
        super(props)
        this.state = {desayunos:[]}
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/platos')
        .then(res =>res.json())
        .then(res =>{
            
            this.setState({
                desayunos:res.data
            })
        })
    }
    render(){
        console.log(this.state.desayunos)
        const arrayDesayunos = []
        this.state.desayunos.map(desayuno =>{
            if(desayuno.instancia ==='Desayuno'){
                arrayDesayunos.push(desayuno)
            }
            return arrayDesayunos
        })

        console.log(arrayDesayunos)

        const showLunch = arrayDesayunos.map(desayuno =>{
            return(
                <div key={desayuno._id} className='calendario-comidas_plato'>
                    <h5> {desayuno.nombre} </h5>
                    <Link to={`/menu/${desayuno._id}`}><img className='calendario-comidas_imagen'  alt='imagen-desayuno' src={require(`../../../public/uploads/${desayuno.img}`)}/></Link>
                    <h6 className ='parrafo' >{desayuno.time}</h6>
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

export default Desayunos


