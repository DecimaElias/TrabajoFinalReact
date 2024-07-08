import "./Button.css"
import React, { useState } from 'react';

export function Button() {
  const [mostrarBoton, setMostrarBoton] = useState(true);

  const handleClick = () => {
    setMostrarBoton(false);
  };

  return (
    <>
    <div>
      {mostrarBoton && (
        <button className="boton" onClick={handleClick}>Comprar</button>
      )}
      {!mostrarBoton && (
        <p>Gracias por su compra</p>
      )}
    </div>
    </>
    
  );
}

export default Button;