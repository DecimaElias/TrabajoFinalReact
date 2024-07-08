import "./Register.css"
import React from 'react'

export const Register = () => {
  return (
  <>
  
    <h1>Por favor complete el siguiente formulario para registrarse en la pagina:</h1>
    <section className='reg'>

      

       <form>

       <input className='input' name="nombre" id="nombre" placeholder='Ingrese Nombre'/>
       <input className='input' name="apellido" id="apellido" placeholder='Ingrese Apellido'/>
       <input className='input' name="email" id="email" placeholder='Ingrese Email'/>
       <input className='input' name="telefono" id="telefono" placeholder='Ingrese Telefono'/>
       <input className='input' name="password" id="password" placeholder='Ingrese Password'/>
       <input className='input' name="confirmpass" id="confirmpass" placeholder='Ingrese Nuevamente Password'/>
       <button className="reg2">Registrarse</button>
       </form>

    </section>

       
    
  </>
  
  )
}

export default Register; 