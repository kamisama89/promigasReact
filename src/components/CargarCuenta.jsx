import React from "react";

function CargarCuenta() {


    return <>

        <main>
            <div className="container">
                <div className="text-center">
                    <h1 style={{color: "blue"}}>
                        Recarga tu cuenta
                    </h1>
                    <h3>
                        Tienes un saldo de:
                    </h3>
                    <div className="col">
                        <input type="text" style={{backgroundcolor: "rgba(255, 196, 0, 0.815)"}} />
                    </div>
                </div>
                <br />

                <br />
                <div className="row">
                    <div className="col text-end">
                        <label className="font-weight-bold" for="">Valor a recargar</label>
                        <br />
                        <p style={{fontsize: "x-small"}}>Ingrese el precio en pesos</p>
                    </div>
                    <div className="col">
                        <input type="text" placeholder="Ingrese el precio" style={{backgroundcolor: "rgba(255, 196, 0, 0.815)"}} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col text-center">
                        <button type="button" class="btn btn-warning btn-sm" onclick="seleccionar()">Hacer Recarga</button>
                    </div>
                </div>
            </div>
        </main>





    </>
}

export default CargarCuenta;