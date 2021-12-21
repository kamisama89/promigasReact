import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {auth} from '../auth/auth'


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
                        {auth() && <Link to="/usuarios" className="nav-link active">Usuarios</Link>}
                        {auth() && <Link to="/tanquearvehiculo" className="nav-link active">Tanquear Vehiculo</Link>}
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
