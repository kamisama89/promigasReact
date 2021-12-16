import React from "react";
import logo from '../imagenes/logopromigas.png';
import { Dropdown } from "react-bootstrap";


function Vista() {
    return <>
        <header >
            <nav class="navbar navbar-dark bg-primary" style={{ backgroundcolor: "blue" }}>
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img className="imglogo" src={logo} width="30%" />
                    </a>
                </div>
                <div class="col-lg-1 align-self-center">
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            Menu
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/">Volver al Inicio</Dropdown.Item>
                            <Dropdown.Item href="/login">Inicia Sesion</Dropdown.Item>
                            <Dropdown.Item href="/registro">Registrate</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
        </header>
    </>
}
export default Vista;