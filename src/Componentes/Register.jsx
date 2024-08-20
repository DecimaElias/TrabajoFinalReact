import "./Register.css" // "Register" es el componente para iniciar la sesion en la pagina,
import React, {useState} from 'react' //quedo con ese nombre ya que el trabajo era diferente y lo modifique para agregar el firebase.
import { auth } from "../firebase";
import {signInWithEmailAndPassword} from "firebase/auth";

export function Register () {

  const [firebaseError, setFirebaseError] = useState (null) 

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirebaseError(null); 

    const {email, password} = e.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.error(errorCode);
      console.log(errorMessage);

      setFirebaseError(errorMessage); 
    })
  }

  return (
  <>
  
    <h2>Para comenzar por favor inicie Sesion</h2>
    <section className='reg'>

       <form onSubmit={handleSubmit} action="">
        <input className='input' name="email" id="email" placeholder='Ingrese Email'/>
        <input className='input' name="password" id="password" placeholder='Ingrese Password'/>
        <button type="submit" className='reg1'>Iniciar Sesion</button>
        <span className="msg">{firebaseError}</span>
       
        
       </form>

    </section>

       
    
  </>
  
  )
}

export default Register; 