import './Enlace.css'
import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';


export const Enlace = () => {
 
   return (

    <nav className='enlace'>
      Si no tiene cuenta  puede <NavLink to="/Login">Registrarse</NavLink> para ver nuestros productos.
    
    </nav>
  )
};
  
 



