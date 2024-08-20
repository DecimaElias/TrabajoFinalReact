//El trabajo muestra los productos sacados de un .JSON una vez que se registra y se loguea,
//Cada producto tiene un boton "comprar" que al presionarlo dice "gracias por su compra"
//para loguearse se utiliza firebase, se inicia sesion y se desconecta.
//el unico detalle que no pude hacer es que cuando uno se registra la pagina sigue en el mismo lugar por lo que hay que ir atras.


import './App.css'
import { Enlace } from './Componentes/Enlace';
import { Home } from './Componentes/Home';
import { Outlet } from 'react-router-dom';
import { useContext, useEffect} from 'react';
import { UserCtx } from './Documentos/ContextUser';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import ButtonOut from './Componentes/ButtonOut';
import  { Register } from './Componentes/Register';



function App() {
  const {user, setUser} = useContext(UserCtx);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      }
    });
  }, []);

  return (
    <>
    <header className='Titulo'>
      <h1>TecnoElias.Net</h1>
    {user? (
      <>
      <p>Usted se conecto a traves de {JSON.stringify(user)}</p>
      <ButtonOut/>
      <Home/>
      </>
  )  
  :
  (
    <>
    <p>Usted no esta conectado</p>
    <Register/>
    </>
  ) 
}
       <div className='Titulo'>
          
       </div>
       
      <Enlace/>
      <Outlet></Outlet>

    </header>  
    </>
  )
}

export default App
