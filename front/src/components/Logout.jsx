import React from "react";
import { DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";


export default function Logout() {
    const logout = ()=>{
        localStorage.removeItem("token");
        window.location.href = "/";
    }


    return<>
        <DropdownButton onClick={logout}><DropdownItem>Cerrar Sesion</DropdownItem></DropdownButton>
    </>
}

