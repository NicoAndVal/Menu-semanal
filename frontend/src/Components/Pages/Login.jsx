import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'


const login = (e) =>{
    e.preventDefault()
    fetch('http://localhost:5000/api/postUsers',{
      method:'POST',
      body: new FormData(e.target)
    })
    .then(res => res.json())
    .then(res =>{
      localStorage.setItem('token',res)
      window.location='/'
    })
    .catch(() =>alert('HUBO UN PROBLEMA PARA INICIAR SESION'))
  
  }


const Login = () => {

  return (
    <div className='text-center contenedor-login'>
      <form className="form-signin formulario-login" onSubmit={login}>
        <img className="mb-4" src={logo} alt="logo" width="72" height="72" />

        <h1 className="h3 mb-4 font-weight-normal">INGRESAR</h1>
        
      
        <label htmlFor="inputEmail" className="sr-only">EMAIL</label>
        <input type="email" id="inputEmail"  name='email' className="form-control" placeholder="Email" required autoFocus />
        
        <label htmlFor="inputPassword" className="sr-only">CONTRASEÑA</label>
        <input type="password" id="inputPassword" name='password' className="form-control mb-3" placeholder="Password" required/>

        <button className="btn btn-lg btn-success btn-block" type="submit">Ingresar</button>
        <p className="mt-5 mb-3 text-muted">¿No tienes cuentas? <Link to='/registro'>Registrate</Link></p>
        <p className="text-muted">&copy; 2017-2019</p>
      </form>
    </div>
    )
}



export default Login
