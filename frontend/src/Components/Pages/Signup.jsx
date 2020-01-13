import React from 'react'

const handleSubmit = e =>{
  e.preventDefault()

  fetch('http://localhost:5000/api/newUser',{
    method:'POST',
    body: new FormData(e.target)})
    .then(res => res.json())
    .then(res => {
      alert(res)
      window.location('/login')
    })
  }

const Signin = () => {

  return (
    <div className='text-center contenedor-login'>
      <form className="form-signin formulario-login" action='POST' onSubmit={handleSubmit}>
        <img className="mb-4" src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" alt="logo" width="72" height="72" />

        <h1 className="h3 mb-4 font-weight-normal">INGRESE SUS DATOS</h1>
        
        <label htmlFor="inputName" className="sr-only">NOMBRE</label>
        <input type="text" name='nombre' id="inputName" className="form-control" placeholder="Nombre" required autoFocus/>
        
        <label htmlFor="inputEmail" className="sr-only">EMAIL</label>
        <input type="email"  name='email' id="inputEmail" className="form-control"  placeholder="Email" required />
        
        <label htmlFor="inputPassword" className="sr-only">CONTRASEÑA</label>
        <input type="password"  name='password' id="inputPassword" className="form-control" placeholder="Password" required/>
        
        <label htmlFor="inputConfirmPassword" className="sr-only">CONFIRMAR CONTRASEÑA</label>
        <input type="password"  name='confirm_password' id="inputConfirmPassword" className="form-control mb-3" placeholder="Confirmación Password" required />
          
        <button className="btn btn-lg btn-success btn-block" type="submit">REGISTRARSE</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
      </form>
    </div>
    )
}

export default Signin
