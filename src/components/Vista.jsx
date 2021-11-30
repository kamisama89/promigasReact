import React from "react";
import logo from '../imagenes/logopromigas.png';


const Vista = () => {
    return <>

        <header>
            <nav class="navbar navbar-dark bg-primary" style={{ backgroundcolor: "blue" }}>
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img className="imglogo" src={logo} width="20%" />
                    </a>
                </div>
                <div class="col-lg-1 align-self-center">
                    <button type="button" class="btn btn-warning">Menu</button>
                </div>
            </nav>
        </header>
    </>
}
export default Vista;