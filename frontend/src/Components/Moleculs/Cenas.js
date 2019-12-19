import React from 'react'
import { Link } from 'react-router-dom';

class Cenas extends React.Component {

    constructor(props) {
        super(props)
        this.state = { cenas: [] }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/platos')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    cenas: res.data
                })
            })
    }
    render() {
        const arrayCenas = []
        this.state.cenas.map(cena => {
            if (cena.instancia === 'Cena') {
                arrayCenas.push(cena)
            }
            return arrayCenas
        })

        const showCenas = arrayCenas.map(cena => {
            return (
                <div key={cena._id} className='calendario-comidas_plato'>
                    <h5> {cena.nombre} </h5>
                    <Link to={`/menu/${cena._id}`}><img className='calendario-comidas_imagen' src={require(`../../../public/uploads/${cena.img}`)} /></Link>
                    <h6 className='parrafo' >{cena.time}</h6>
                </div>
            )
        })

        const randomCenas = showCenas.sort(() => Math.random() - 0.5)


        return (
            <div className='calendario-comidas'>
                {randomCenas.slice(0, 7)}
            </div>
        )
    }
}

export default Cenas