import { auth } from "../firebase"
import "./Login.css" // Login es para registrarme en la pagina
import React, {useState} from 'react' 
import { createUserWithEmailAndPassword } from "firebase/auth";

function Login () {

  const [firebaseError, setFirebaseError] = useState (null);

  const handleSubmit = (e) =>{
    e.preventDefault();

    setFirebaseError(null) 

    const {email, password} = e.target.elements;
    createUserWithEmailAndPassword(auth, email.value, password.value)
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


  };
  return (
    <>
    
    <div className="titlogin">
      <h1>Para comenzar, ingrese su usuario y contraseña</h1> 
    <h3>Recuerde que su contraseña debe tener un minimo de 6 caracteres</h3> 
    </div>
   
    <section className='log'>

       <form onSubmit={handleSubmit} action="">

       <input className='input' name="email" id="email" placeholder='Ingrese Email'/>
       <input className='input' name="password" id="password" placeholder='Ingrese Password'/>
       <button type="submit" className='reg1'>Registrarse</button>
       <span className="msg">{firebaseError}</span>

       </form>


    </section>
    </>

  )
}

export default Login;