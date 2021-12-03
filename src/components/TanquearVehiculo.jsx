import React from "react";

function TanquearVehiculo(){

    return (
            <>
            <main>
                <div className="container">
                    <div className= "m-2 text-center">
                        <h1 style={{color: "blue"}}>
                            Tanquear Vehiculos
                        </h1>
                        <h3>
                            Seleccione el tipo de gasolina que desea ingresar.
                        </h3> 
                    </div>
                    <div className= "m-2 text-center">
                            <h3>
                                Tipos de gasolina disponibles:
                            </h3>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col text-end">
                            <label className="font-weight-bold" for="">Gasolina Corriente</label>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-warning btn-sm font-weight-bold" onclick="seleccionar()">Seleccionar</button>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col text-end">
                            <label className="font-weight-bold" for="">Gasolina Extra</label>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-warning btn-sm" onclick="seleccionar()">Seleccionar</button>
                        </div>
                    </div>
                    <div className="row m-3 text-center">
                        <div className="col">
                            <button type="button" className="btn btn-danger">Tanquear</button>
                        </div>
                    </div>
                </div> 
            </main>
    </>
    )            
}

export default TanquearVehiculo;