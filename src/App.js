import logo from './logo.svg';
import './App.css';
import TablaListadoVehiculo from './components/ListadoVehiculos';
import Vista from './components/Vista';
import { GestionProductos } from './components/GestionProductos';
import { ModificarGasCorriente } from './components/ModificarGasCorriente';
import { ModificarGasExtra } from './components/ModificarGasExtra';
import CargarCuenta from './components/CargarCuenta';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Registro from './components/Registro';
function App() {
  return (
    <>
      <Vista/> 
      <Inicio/>     
        
      
     
      {/*<Login />*/}
      {/*<Registro />*/}
      {/*<TablaListadoVehiculo />*/}
      {/* {<GestionProductos/>} */}
      {/* <GestionProductos/> */}
      {/* <ModificarGasCorriente/> */}
      {/* <ModificarGasExtra/> */}
      {/* <CargarCuenta/> */}

    </>
  );
}

export default App;
