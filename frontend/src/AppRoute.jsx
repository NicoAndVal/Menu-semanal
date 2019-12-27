import React from 'react'
import Planificador from '../src/Components/Pages/Planificador';
import './styles/style.scss'
import './styles/reset.scss'
import MainMenu from '../src/Components/Template/MainMenu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menus from '../src/Components/Pages/Menus'
import AgregarMenu from '../src/Components/Pages/AgregarMenu'
import SignupForm from '../src/Components/Pages/SignupForm'
import Menues from '../src/Components/Pages/Menues'
import NavBarMobil from './Components/Template/NavBarMobil';
import Lunes from './Components/Pages/Lunes'
import Martes from './Components/Pages/Martes'
import Miercoles from './Components/Pages/Miercoles'
import Jueves from './Components/Pages/Jueves'
import Viernes from './Components/Pages/Viernes'
import Sabado from './Components/Pages/Sabado'
import Domingo from './Components/Pages/Domingo'

const AppRoute = () => {
    return (
        <Router>
            <NavBarMobil/>
            <Switch>
                <Route path='/' exact component={Lunes} />
                <Route path='/martes' exact component={Martes} />
                <Route path='/miercoles' exact component={Miercoles} />
                <Route path='/jueves' exact component={Jueves} />
                <Route path='/viernes' exact component={Viernes} />
                <Route path='/sabado' exact component={Sabado} />
                <Route path='/domingo' exact component={Domingo} />
                <Route path='/mostrarmenu' component={Menues} />
                <Route path='/agregarmenu' component={AgregarMenu} />
                <Route path='/formulario' component={SignupForm} />
            </Switch>

        </Router>
    )
}

export default AppRoute