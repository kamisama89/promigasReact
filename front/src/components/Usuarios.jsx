import React from "react";
const {usuarios} = require("../data/usuariosData.js");

const Mov =({id, placas, saldo_pesos, saldo_puntos})=>
    <tr>
        <td>{id}</td>
        <td>{placas}</td>
        <td>{saldo_pesos}</td>
        <td>{saldo_puntos}</td>
    </tr>
const listaUsuarios = usuarios.map(m => (
    <Mov id={m.id} placas={m.placas} saldo_pesos={m.saldo_pesos} saldo_puntos={m.saldo_puntos} />

));

export function Usuarios() {

    return <>
    
        <main className="container">
            <h1>Listado de Usuarios</h1>
            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Placas</th>
                                        <th scope="col">Saldo en pesos</th>
                                        <th scope="col">saldo en puntos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listaUsuarios}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    </>
}
