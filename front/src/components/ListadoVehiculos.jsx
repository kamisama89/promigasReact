import React from "react";
import RegistroVehiculo from "./RegistroVehiculos";
import VehiculoEliminar from "./VehiculoEliminar";
import { VehiculosLista } from "./VehiculosLista";

function TablaListadoVehiculo() {

    

    return <>

        <main className="container">
            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <VehiculosLista/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col">
                        <RegistroVehiculo />
                        </div>

                        <div className="col">
                        <VehiculoEliminar/>
                        </div>
                    </div>
                </div>
            </div>



        </main>

    </>
}

export default TablaListadoVehiculo;