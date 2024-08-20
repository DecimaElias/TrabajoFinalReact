import './Home.css'
import React, { useState, useEffect } from 'react';
import Button from './Button';




export function Home() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch('src/productos.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProductos();
    }, []);

    return (
        <>
        <div>
            <h2>PRODUCTOS DISPONIBLES</h2>
            <ul className = "Productos">
                
                {productos.map(producto => (
                    <li key={producto.id}>
                        <img src={producto.photo} alt='fot' width="100"/>
                        <h3>{producto.nombre}</h3>
                        <p>Precio: U$S {producto.precio}</p>
                        <p>{producto.descripcion}</p>
                        <Button/>
                        
                    </li>
                    
                ))}
            </ul>
        </div>
        </>
        
    );
}

export default Home;