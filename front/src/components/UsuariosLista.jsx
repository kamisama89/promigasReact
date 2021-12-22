import React, { useEffect, useState } from "react";


export function UsuariosLista(){
    const [listado, setListado]=useState([]);
    const token = localStorage.getItem("token");

    useEffect(()=>{
        fetch("http://localhost:8080/user/listar",{
            headers:{
                "content-type":"application/json", "authorization": `Bearer ${token}`},
            method:"GET"
        }).then(res=>res.json())
        .then(res=>{
            if (res.estado==="ok")
            setListado(res.listaUsu);
        })
    })
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Usuario</th>
                    <th>CC</th>
                </tr>
            </thead>
            <tbody>
                {
                    listado.map(v=> <tr> <td>{v.usuario}</td>
                    <td>{v.cc}</td></tr>)
                }
            </tbody>
        </table>
    )
}
