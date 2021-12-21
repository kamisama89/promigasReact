import React, { useEffect, useState } from "react";

export function UsuariosLista(props) {
    const [listado, setListado] = useState([]);
    const hostBase = "http://localhost:8080";

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch(`${hostBase}/user/listar`, {
            headers: {"authorization": `Bearer ${token}`},
            method: "GET"
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok")
                    setListado(res.ventas);
            })
    }, [props.recarga])
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cedula</th>
                </tr>
            </thead>
            <tbody>
                {
                    listado.map(v => <tr><td>{v.nombre}</td><td>{v.cc}</td></tr>)
                }
            </tbody>
        </table>
    )
}