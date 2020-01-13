import React from 'react'
import './styles/style.scss'
import './styles/reset.scss'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import AgregarMenu from '../src/Components/Pages/AgregarMenu'
import Menues from '../src/Components/Pages/Menues'
import Lunes from './Components/Pages/Lunes'
import Martes from './Components/Pages/Martes'
import Miercoles from './Components/Pages/Miercoles'
import Jueves from './Components/Pages/Jueves'
import Viernes from './Components/Pages/Viernes'
import Sabado from './Components/Pages/Sabado'
import Domingo from './Components/Pages/Domingo'
import Login from './Components/Pages/Login'
import Signin from './Components/Pages/Signup'
import Protected from './Components/Routes/Protected'
import Public from './Components/Routes/Public'
import Header from './Components/Organism/Header'
import Home from './Components/Pages/Home'


const AppRoute = () => {
    return (
        <Router>
            <Header/>
            <Switch>

                <Protected path='/' exact component={Home}/>
                <Protected path='/lunes' exact component={Lunes}/>
                <Protected path='/martes'  component={Martes} />
                <Protected path='/miercoles'  component={Miercoles} />
                <Protected path='/jueves'  component={Jueves} />
                <Protected path='/viernes'  component={Viernes} />
                <Protected path='/sabado'  component={Sabado} />
                <Protected path='/domingo'  component={Domingo} />
                <Protected path='/menues' component={Menues} />
                <Protected path='/agregarmenu' component={AgregarMenu} />

                <Public path='/registro' component={Signin} />
                <Public path='/login' component={Login} />
                

            </Switch>

        </Router>
    )
}

export default AppRoute