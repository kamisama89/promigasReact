import React from "react";

export function ModificarGasExtra(){
    return(
        <>
        <div className="container">
            <div className="text-center">
                <h1 style={{color: "blue"}}>
                    Modificar Gasolina Extra
                </h1>
                <h3>
                    Modifica las cantidades, fechas y precios del producto
                </h3>
            </div>
            <br/>
            <div className="row">
                <div className="col text-end">
                    <label className="font-weight-bold" for="">Rango de fechas</label>
                </div>
                <div className="col">
                        desde <input type="date" name="" id="" style={{backgroundColor: "rgba(255, 196, 0, 0.815)"}}/> 
                        hasta <input type="date" name="" id="" style={{backgroundColor: "rgba(255, 196, 0, 0.815)"}}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col text-end">
                    <label className="font-weight-bold" for="">Precio por galón</label>
                    <br/>
                    <p>Ingrese el precio en pesos</p>
                </div>
                <div className="col">
                    <input type="text" placeholder="Ingrese el precio" style={{backgroundColor: "rgba(255, 196, 0, 0.815)"}}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col text-end">
                    <label className="font-weight-bold" for="">Cantidad Disponible</label>
                    <br/>
                    <p>(Ingrese la cantidad en miles de galones)</p>
                </div>
                <div className="col">
                    <input  type="text" placeholder="Ingrese la cantidad" style={{backgroundColor: "rgba(255, 196, 0, 0.815)"}}/>
                </div>
            </div>
        </div>             
        </>
    )
}