import React from "react";

export function GestionProductos(){
    return(
        <>
        <div className="container">
            <div className="text-center">
                <h1 style={{color:"blue"}}>
                    Gestión de Productos
                </h1>
                <h3>
                    Modifica las cantidades y los precios de cada producto
                </h3>
            </div>
            <br/>
            <div className="row">
                <div className="col text-end">
                    <label className="font-weight-bold" for="">Gasolina Corriente</label>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-warning btn-sm" style={{backgroundColor: "rgba(255, 196, 0, 0.815)"}}>Modificar</button>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col text-end">
                    <label className="font-weight-bold" for="">Gasolina Extra</label>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-warning btn-sm" style={{backgroundColor: "rgba(255, 196, 0, 0.815)"}}>Modificar</button>
                </div>
            </div>
        </div>
        </>
    )
}