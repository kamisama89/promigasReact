import React from "react";

function TanquearVehiculo(){

    return (
            <>
            <header>
                <nav className="navbar navbar-dark bg-primary" style="background-color: blue;">
                    <div className="container">
                        <div className="row m-2">
                            <div className="col-sm-11">
                                <a className="navbar-brand" href="#">
                                <img src="./img/cropped-Logo-Petromil_Blanco-7-1536x445.png" alt="" width="20%"/>
                                </a>
                            </div>
                            <div className="col-sm-1 align-self-center">
                                <button type="button" className="btn btn-warning">Menu</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <div className="container">
                    <div className=" m-2 text-center">
                        <h1 style="color: blue;">
                            Tanquear Vehiculos
                        </h1>
                        <h3>
                            Seleccione el tipo de gasolina que desea ingresar.
                        </h3>
                        <h3 style="margin-top: 20px;">
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