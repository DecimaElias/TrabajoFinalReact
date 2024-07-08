import "./Login.css"
import React from 'react'

export const Login = () => {
  return (
    <>
    
    

    <h1>Ingrese su usuario y contraseña</h1>
    <section className='log'>

       <form>

       <input className='input' name="password" id="password" placeholder='Ingrese Password'/>
       <input className='input' name="confirmpass" id="confirmpass" placeholder='Ingrese Nuevamente Password'/>
       <button className='reg1'>Registrarse</button>

       </form>


    </section>
    </>

  )
}

export default Login;