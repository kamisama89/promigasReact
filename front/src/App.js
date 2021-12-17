import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
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
import RegistroVehiculo from './components/RegistroVehiculos';

function App() {
  return (
    <>
    <Vista/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
        </Routes>
        <Routes>
          <Route exact path="/cargarcuenta" element={<CargarCuenta/>}/>
        </Routes>
        <Routes>
          <Route exact path="/gestionproductos" element={<GestionProductos/>}/>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
        <Routes>
          <Route exact path="/modificargascorriente" element={<ModificarGasCorriente/>}/>
        </Routes>
        <Routes>
          <Route exact path="/modificargasextra" element={<ModificarGasExtra/>}/>
        </Routes>
        <Routes>
          <Route exact path="/movimientosdecuenta" element={<MovimientosDeCuenta/>}/>
        </Routes>
        <Routes>
          <Route exact path="/listadovehiculos" element={<TablaListadoVehiculo/>}/>
        </Routes>
        <Routes>
          <Route path="/vehiculos/guardar" element={<RegistroVehiculo/>}/>
        </Routes>
        <Routes>
          <Route path="/save" element={<Registro/>}/>
        </Routes>
        <Routes>
          <Route exact path="/usuarios" element={<Usuarios/>}/>
        </Routes>
        <Routes>
          <Route exact path="/tanquearvehiculo" element={<TanquearVehiculo />}/>
        </Routes>
      </BrowserRouter>


    </>

  );
}

export default App;
