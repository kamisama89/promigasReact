import React from "react";
const {movimientos} = require("../data/movimientosData.js");

const Mov =({fecha, placa, tipoMovimiento, metodoPago, valor})=>
    <tr>
        <td>{fecha}</td>
        <td>{placa}</td>
        <td>{tipoMovimiento}</td>
        <td>{metodoPago}</td>
        <td>{valor}</td>
    </tr>
const listaMovimientos = movimientos.map(m => (
    <Mov fecha={m.fecha} placa={m.placa} tipoMovimiento={m.tipoMovimiento} metodoPago={m.metodoPago} valor={m.valor} />

));

export function MovimientosDeCuenta() {

    return <>
    
        <main className="container">
            <h1>Listado de Movimientos</h1>
            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Placa</th>
                                        <th scope="col">Tipo de Movimiento</th>
                                        <th scope="col">Método de pago</th>
                                        <th scope="col">Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listaMovimientos}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    </>
}
