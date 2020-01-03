import React from 'react'
import './styles/style.scss'
import './styles/reset.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AgregarMenu from '../src/Components/Pages/AgregarMenu'
import SignupForm from '../src/Components/Pages/SignupForm'
import Menues from '../src/Components/Pages/Menues'
// import NavBarMobil from './Components/Template/NavBarMobil';
import Lunes from './Components/Pages/Lunes'
import Martes from './Components/Pages/Martes'
import Miercoles from './Components/Pages/Miercoles'
import Jueves from './Components/Pages/Jueves'
import Viernes from './Components/Pages/Viernes'
import Sabado from './Components/Pages/Sabado'
import Domingo from './Components/Pages/Domingo'
import MainMenu from './Components/Template/MainMenu'


const AppRoute = () => {
    return (
        <Router>
            <MainMenu/>
            <Switch>
                <Route path='/' exact component={Lunes} />
                <Route path='/martes'  component={Martes} />
                <Route path='/miercoles'  component={Miercoles} />
                <Route path='/jueves'  component={Jueves} />
                <Route path='/viernes'  component={Viernes} />
                <Route path='/sabado'  component={Sabado} />
                <Route path='/domingo'  component={Domingo} />
                <Route path='/menues' component={Menues} />
                <Route path='/agregarmenu' component={AgregarMenu} />
                <Route path='/formulario' component={SignupForm} />
            </Switch>

        </Router>
    )
}

export default AppRoute