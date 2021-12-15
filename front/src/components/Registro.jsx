import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Registro(){
    const [refresh, setRefresh] = useState(false);    
    const [success, setSuccess] = useState(false);
    const nomRef = useRef();
    const ccRef = useRef();
    const passRef = useRef();
    const guardar = () => {
        // Captura los datos de las cajas de texto
        const hostBase = "http://localhost:8080";
        const nom = nomRef.current.value;
        const cc = ccRef.current.value;
        const passwond = passRef.current.value;
        fetch(`${hostBase}/usuarios/guardar`, {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ nom, cc, passwond })
        }).then(res => res.json())
            .then(res => {
                setRefresh(!setRefresh);
                alert(res.msg)
              })
            }  
      
    
    return(
        <>
        <main>       
          <form action="" method="post">    
            <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div  className="card  text-white" style={{backgroundColor: "#0060fc"}}>
                    <div className="card-body p-5 text-center">
                        <Link to="/" className="text-white-50 fw-bold">Regresar</Link>
                     
                        <div className="mb-md-5 mt-md-4 pb-5">
          
                        <h2 className="fw-bold mb-2 text-uppercase">Registro</h2>
                        <p className="text-black-50 mb-5">por favor llena los datos!</p>
                        <div className="form-outline form-dark mb-4">
                            <input ref={nomRef} type="text" name="nombre" id="typeTextX" className="form-control form-control-lg" />
                            <label className="form-label" for="typeTextX">Nombre</label>
                          </div>
            
                        <div className="form-outline form-white mb-4">
                          <inputv ref={ccRef} type="text" name="email" id="typeEmailX" className="form-control form-control-lg" />
                          <label className="form-label" for="typeEmailX">CC</label>
                        </div>
                        
    
                          <div className="form-outline form-white mb-4">
                          <input ref={passRef} type="password" name="pass" id="typePasswordX" className="form-control form-control-lg" />
                          <label className="form-label" for="typePasswordX">Password</label>
                        </div>
                        
          
                        <button className="btn btn-outline-light btn-lg px-5" type="button" onClick={guardar} id="send-signup" name="signup">Guardar</button>
                            <div>
                            </div>
          
                      </div>
          
                      
          
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
    


            </main>   
               </>
    )
}
export default Registro;