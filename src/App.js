import logo from './logo.svg';
import './App.css';
import TablaListadoVehiculo from './components/ListadoVehiculos';
import Vista from './components/Vista';
import { GestionProductos } from './components/GestionProductos';
import { TanquearVehiculo } from './components/TanquearVehiculo';
import { MovimientosDe_Cuenta } from './components/MovimientosDe_Cuenta';
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
      {/*<TanquearVehiculo />*/}
      {/*<MovimientosDe_Cuenta />*/}
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
