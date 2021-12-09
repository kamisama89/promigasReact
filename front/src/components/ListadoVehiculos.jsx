import React, { useEffect, useState } from "react";

const Vehiculos = ({ id, placa, modelo }) =>

    <tbody>
        <tr>
            <td>{id}</td>
            <td>{placa}</td>
            <td>{modelo}</td>
        </tr>
    </tbody>

    ;

function TablaListadoVehiculo() {

    const [lista, setLista] = useState([]);


    useEffect(() => {
        const peticion = async () => {
            const data = await consumir();
            setLista(data);
        }
        peticion();
    }, [])



    async function consumir() {
        const ruta = `http://localhost:8080/listavehiculo`;
        const result = await fetch(ruta);
        return await result.json()
    }


    return <>

        <main className="container">
            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Vehiculo</th>
                                        <th scope="col">Modelo</th>
                                    </tr>
                                </thead>
                                {
                                    lista.map((e) => 
                                    <Vehiculos key={e.id} id={e.id} placa={e.placa} modelo={e.modelo}/>
                                    )
                                }
                            </table>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h2 className="d-inline-block mb-3">Registrar Vehiculo</h2>

                            <h5 className="d-inline-block mb-0 text-success" style={{ color: "black" }}>Placa:</h5>
                            <div className="mb-2 text-muted">
                                <textarea name="" id="" cols="15" rows="1" style={{ backgroundcolor: "rgba(255, 196, 0, 0.815)" }}></textarea>
                            </div>

                            <h5 className="d-inline-block mb-0 text-success" style={{ color: "black" }}>Modelo:</h5>
                            <div className="mb-2 text-muted">
                                <textarea name="" id="" cols="15" rows="1" style={{ backgroundcolor: "rgba(255, 196, 0, 0.815)" }}></textarea>
                            </div>

                            <button type="button" className="btn btn-warning btn-sm" style={{ backgroundColor: "rgba(255, 196, 0, 0.815)" }}>Registrar</button>
                        </div>

                        <div className="col p-4 d-flex flex-column position-static">
                            <h2 className="d-inline-block mb-3">Eliminar Vehiculo</h2>

                            <h5 className="d-inline-block mb-0 text-success" style={{ color: "black" }}>ID:</h5>
                            <div className="mb-2 text-muted">
                                <textarea name="" id="" cols="15" rows="1" style={{ backgroundcolor: "rgba(255, 196, 0, 0.815)" }}></textarea>
                            </div>
                            <button type="button" className="btn btn-warning btn-sm" style={{ backgroundColor: "rgba(255, 196, 0, 0.815)" }}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>



        </main>

    </>
}

export default TablaListadoVehiculo;