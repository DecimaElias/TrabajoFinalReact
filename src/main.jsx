import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Register from "./Componentes/Register.jsx"
import Login from "./Componentes/Login.jsx"
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
