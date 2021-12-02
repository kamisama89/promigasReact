import React from "react";
import torre from '../imagenes/torre.jpg';


export function Inicio(){
    return(
      <> 
         <header>
         <body
          style={{backgroundImage: "url(" + require("../imagenes/torre.jpg").default + ")"}}
          > </body>
           
           </header> 
        

              <nav className="navbar navbar-expand-lg navbar-">
                  <div className="container-fluid">             
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link active" href="#">Productos</a>
                        <a className="nav-link active" href="#">Usuarios</a>
                        <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true">Costos</a>
                      </div>
                    </div>
                  </div>
                </nav>
        
     </>  
)
}
export default Inicio;
