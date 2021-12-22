import React from "react";
import logo from '../imagenes/logopromigas.png';
import { Dropdown, DropdownButton } from "react-bootstrap";
import { auth } from "../auth/auth"
import Logout from "./Logout";



function Vista() {
    return <>
        <header >
            <nav class="navbar navbar-dark bg-primary" style={{ backgroundcolor: "blue" }}>
                <div class="container">
                    <img className="imglogo" src={logo} width="30%" />
                </div>
                <div class="col-lg-1 align-self-center">
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            Menu
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {auth() && <Logout></Logout>}
                            <Dropdown.Item href="/">Volver al Inicio</Dropdown.Item>
                            <Dropdown.Item href="/login">Inicia Sesion</Dropdown.Item>
                            <Dropdown.Item href="/save">Registrate</Dropdown.Item>
                            {auth() && <Dropdown.Item href="/listadovehiculos">Listado Vehiculos</Dropdown.Item>}
                            {auth() && <Dropdown.Item href="/modificargasextra">Modificar Gas Extra</Dropdown.Item>}
                            {auth() && <Dropdown.Item href="/modificargascorriente">Modificar Gas Corriente</Dropdown.Item>}
                            {auth() && <Dropdown.Item href="/movimientosdecuenta">Movimientos de Cuenta</Dropdown.Item>}
                            {auth() && <Dropdown.Item href="/tanquearvehiculo">Tanquear Vehiculo</Dropdown.Item>}

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
        </header>
    </>
}
export default Vista;