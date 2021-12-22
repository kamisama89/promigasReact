import React, { useRef } from "react";

function VehiculoEliminar() {

    const placaRef = useRef();
    const modeloRef = useRef();

    function eliminar() {
        //Captura los datos de los inputs
        const hostBase = "http://localhost:8080";
        const placa = placaRef.current.value;        //Realiza la petición al servidor (consumir API)
        const token = localStorage.getItem("token");
        fetch(`${hostBase}/vehiculos/eliminar`, {
            headers: { "content-type": "application/json", "authorization": `Bearer ${token}` },
            method: "POST",
            body: JSON.stringify({ placa })
            
        }).then(data => data.json())
            .then(data => {
                alert(data.msg);
            })
    }
    function editar() {
        //Captura los datos de los inputs
        const hostBase = "http://localhost:8080";
        const placa = placaRef.current.value;        
        const modelo = modeloRef.current.value; 
        const token = localStorage.getItem("token");       
        fetch(`${hostBase}/vehiculos/editar`, {
            headers: { "content-type": "application/json", "authorization": `Bearer ${token}` },
            method: "POST",
            body: JSON.stringify({ placa,modelo })
            
        }).then(data => data.json())
            .then(data => {
                alert(data.msg);
            })
    }

    return <>
                        <div className="col p-4 d-flex flex-column position-static">
                            <h2 className="d-inline-block mb-3">Eliminar Vehiculo</h2>

                            <h5 className="d-inline-block mb-0 text-success" style={{ color: "black" }}>Placa:</h5>
                                <input ref={placaRef} type="text" className="form-control form-control-lg"/>                            
                                <button type="button" className="btn btn-warning btn-sm" style={{ backgroundColor: "rgba(255, 196, 0, 0.815)" }} onClick={eliminar}>Eliminar</button>
                            <h5 className="d-inline-block mb-0 text-success" style={{ color: "black" }}>Modelo:</h5>
                                <input ref={modeloRef} type="text" className="form-control form-control-lg"/>                            
                                <button type="button" className="btn btn-warning btn-sm" style={{ backgroundColor: "rgba(255, 196, 0, 0.815)" }} onClick={editar}>Actualizar</button>
                        </div>
                        
    </>
}

export default VehiculoEliminar;