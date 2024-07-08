import './Enlace.css'
import React from 'react'
import { Link } from 'react-router-dom';

export const Enlace = () => {
  return (
    <nav className='enlaces'>
          <Link to="/Login">Iniciar Sesion</Link>  |   <Link to="/Register">Registrarse</Link>
    
    </nav>
  )
}
