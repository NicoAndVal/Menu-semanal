import React from 'react' 

class MostrarMenu extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            platos: [],   
        }

        this.eliminarPlato = this.eliminarPlato.bind(this)
        this.cargarMenu = this.cargarMenu.bind(this)
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/platos')
        .then(res => res.json())
        .then(res => {
            this.setState({platos:res.data})
            console.log(res.data)
        })
    }

    cargarMenu(){
        fetch('http://localhost:5000/api/platos')
        .then(res => res.json())
        .then(res => {
            this.setState({platos:res.data})
            console.log(res.data)
        })
    }

 eliminarPlato(e) {
        let _idPlato = e.target.id
        console.log(_idPlato)
          fetch(`http://localhost:5000/api/plato/${_idPlato}`, {
            method: 'DELETE'
        })


        this.cargarMenu()

        e.preventDefault()
    }


    render() {
        return (

            <div className='grid-menus'>
                {this.state.platos.map(plato => {
                    return (
                        <div className="card" key={plato._id}>
                            <img src={require(`../../../public/uploads/${plato.img}`)} className="card-img-top grid-menus_imagen " alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{plato.nombre}</h4>
                                <h6 className="card-title">{plato.time}</h6>
                                <h6 className="card-title">{plato.porciones}</h6>
                                <h6 className="card-title">{plato.instancia }</h6>

                                <form onSubmit={this.eliminarPlato} id={plato._id} className='grid-menus_button'>
                                    <button className="btn btn-success">VER</button>
                                    <button className="btn btn-danger">ELIMINAR</button>
                                </form>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MostrarMenu