import React from "react";

function RegistroVehiculo() {

    function guardar() {
        //Captura los datos de los inputs
        const hostBase = "http://localhost:8080";
        const placa = document.getElementById("placa").value;
        const modelo = document.getElementById("modelo").value;
        const token = localStorage.getItem("token");
        //Realiza la petición al servidor (consumir API)
        fetch(`${hostBase}/vehiculos/guardar`, {
            headers: { "content-type": "application/json", "authorization": `Bearer ${token}` },
            method: "POST",
            body: JSON.stringify({ placa, modelo })
        }).then(data => data.json())
            .then(data => {
                alert(data.msg);
            })
    }

    return <>
                        <div className="col p-4 d-flex flex-column position-static">
                            <h2 className="d-inline-block mb-3">Registrar Vehiculo</h2>

                            <h5 className="d-inline-block mb-0 text-success" style={{ color: "black" }} >Placa:</h5>
                            <div className="mb-2 text-muted">
                                <textarea name="" id="placa" cols="15" rows="1" style={{ backgroundcolor: "rgba(255, 196, 0, 0.815)" }}></textarea>
                            </div>

                            <h5 className="d-inline-block mb-0 text-success" style={{ color: "black" }}>Modelo:</h5>
                            <div className="mb-2 text-muted">
                                <textarea name="" id="modelo" cols="15" rows="1" style={{ backgroundcolor: "rgba(255, 196, 0, 0.815)" }}></textarea>
                            </div>

                            <button type="button" className="btn btn-warning btn-sm" style={{ backgroundColor: "rgba(255, 196, 0, 0.815)" }} onClick={guardar}>Registrar</button>
                        </div>

                        
    </>
}

export default RegistroVehiculo;