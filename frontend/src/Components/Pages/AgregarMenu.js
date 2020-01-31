import React from 'react'


class AgregarMenu extends React.Component {

    constructor(props) {
        super(props)
        this.enviarMenu = this.enviarMenu.bind(this)
    }

    enviarMenu(e) {
        
        console.log(new FormData(e.target))
        fetch("http://localhost:5000/api/plato",{
            method: 'POST',
            body: new FormData(e.target)
        })
        .then(res =>res.json())
        .then(res => alert(res))
        
        e.preventDefault()

        e.target.nombre.value =''
        e.target.instancia.value=''
        e.target.elaboracion.value=''
        e.target.porciones.value = ''
        e.target.imagen.value = ''
        e.target.time.value = ''
    }

    render() {
        return (
            <div className='container'>

                <h1 className='title_agrega_menu'> AGREGA TU MENÚ </h1>

                <form onSubmit = {this.enviarMenu} encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nombre del Menú</label>
                        <input type="text" className="form-control"  name='nombre'/>
                    </div>
                    <div className="form-group">
                        <label>Elaboración del plato</label>
                        <textarea  name='elaboracion'  className="form-control" rows="3"></textarea>
                    </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label >Porciones</label>
                                    <select className="form-control" name='porciones'>
                                        <option value='1 persona'>1 Persona</option>
                                        <option value='2 persona'>2 Persona</option>
                                        <option value='3 persona'>3 Persona</option>
                                        <option value='4 persona'>4 Persona</option>
                                        <option value='5 persona'>5 Persona</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label >Tiempo</label>
                                    <select className="form-control" name='time'>
                                        <option value='15 minutos'>15 Minutos</option>
                                        <option value='30 minutos'>30 Minutos</option>
                                        <option value='45 minutos'>45 Minutos</option>
                                        <option value='60 minutos'>60 Minutos</option>
                                        <option value='2 horas'>2 Horas</option>
                                    </select>
                                </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label >instancia</label>
                                <select className="form-control" name='instancia'>
                                    <option value='Desayuno'>Desayuno</option>
                                    <option value='Almuerzo'>Almuerzo</option>
                                    <option value='Cena'>Cena</option>
                                </select>
                                </div>

                            </div>
                        </div>       
                    <div className="form-group">
                        <label >Imagen del menu</label>
                        <input name='imagen' type="file" className="form-control-file"/>
                    </div>
                    <button type="submit" className="btn btn-primary">AGREGAR RECETA</button>
                </form>

                

            </div>



        )
    }
}

export default AgregarMenu