import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";


export function Inicio(){
    return(
      <>
      
       
        <div className= ""
        style={{backgroundImage: "url(" + require("../imagenes/torre.jpg").default + ")"}} 
        
        > 

              <nav className="navbar navbar-expand-lg navbar-">
                  <div className="container-fluid">             
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                        <a target="_blank" className="nav-link active" href="https://www.petromil.com//">petromil.com</a>
                        <Link to="/tanquearvehiculo" className="nav-link active">Tanquear Vehiculo</Link>
                        <Link to="/cargarcuenta" className="nav-link active">Cargar saldo</Link>
                        <Link to="/movimientosdecuenta" className="nav-link active">Movimiento de mi cuenta</Link>
                      </div>
                    </div>
                  </div>
                </nav>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
                <Row>
                  <br />
                </Row>
        </div> 
    
     </> 
)
}
export default Inicio;
