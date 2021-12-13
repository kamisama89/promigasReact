import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';

import Vista from './components/Vista';

import TablaListadoVehiculo from './components/ListadoVehiculos';
import { GestionProductos } from './components/GestionProductos';
import { TanquearVehiculo } from './components/TanquearVehiculo';
import { MovimientosDeCuenta } from './components/MovimientosDeCuenta';
import { ModificarGasCorriente } from './components/ModificarGasCorriente';
import { ModificarGasExtra } from './components/ModificarGasExtra';
import CargarCuenta from './components/CargarCuenta'
import Inicio from './components/Inicio';
import Login from './components/Login';
import Registro from './components/Registro';
import { Usuarios } from './components/Usuarios';

function App() {
  return (

    <>
    <Vista/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
        </Routes>
        <Routes>
          <Route path="/cargarcuenta" element={<CargarCuenta/>}/>
        </Routes>
        <Routes>
          <Route path="/gestionproductos" element={<GestionProductos/>}/>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Routes>
          <Route path="/modificargascorriente" element={<ModificarGasCorriente/>}/>
        </Routes>
        <Routes>
          <Route path="/modificargasextra" element={<ModificarGasExtra/>}/>
        </Routes>
        <Routes>
          <Route path="/movimientosdecuenta" element={<MovimientosDeCuenta/>}/>
        </Routes>
        <Routes>
          <Route path="/tablalistadovehiculo" element={<TablaListadoVehiculo/>}/>
        </Routes>
        <Routes>
          <Route path="/registro" element={<Registro/>}/>
        </Routes>
        <Routes>
          <Route path="/usuarios" element={<Usuarios/>}/>
        </Routes>
      </BrowserRouter>


    </>

  );
}

export default App;
