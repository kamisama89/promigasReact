import React, { useEffect, useState } from "react";

export function VehiculosLista(props){
    const [listado, setListado]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/vehiculos/listar",{
            headers:{
                "content-type":"application/json"            },
            method:"GET"
        }).then(res=>res.json())
        .then(res=>{
            if (res.estado==="ok")
            setListado(res.vehi);
        })
    }, [props.recarga])
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Placa</th>
                    <th>Modelo</th>
                </tr>
            </thead>
            <tbody>
                {
                    listado.map(v=> <tr> <td> {v.id}</td>
                    <td>{v.placa}</td>
                    <td>{v.modelo}</td></tr>)
                }
            </tbody>
        </table>
    )
}
