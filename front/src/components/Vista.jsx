import React from "react";
import logo from '../imagenes/logopromigas.png';


function Vista() {
    return <>
        <header >
            <nav className="navbar navbar-dark bg-primary" style={{ backgroundcolor: "blue" }}>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img className="imglogo" src={logo} width="30%" />
                    </a>
                </div>
                <div className="col-lg-1 align-self-center">
                    <button type="button" class="btn btn-warning">Menu</button>
                </div>
            </nav>            
        </header>
    </>
}
export default Vista;