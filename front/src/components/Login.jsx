import React, { useRef, useState } from "react";


export function Login(){
  const [error, setError] = useState();
  const [msgError, setMsgError] = useState();
  const ccRef = useRef();
  const passwordRef = useRef();
  function login() {
      const usuario = ccRef.current.value;
      const password = passwordRef.current.value;
      fetch("../back/src", {
          headers: { "content-type": "application/json" },
          method: "POST",
          body: JSON.stringify({ usuario, password })
      }).then(res => res.json())
          .then(res => {
              if (res.estado === "ok") {
                  { window.location.href = "/inicio" }
              } else {
                  setError(true);
                  setMsgError(res.msg);
              }
          })
  }
    return(
        <>
        {error && <div className="alert alert-danger" role="alert">{msgError}</div>}
        <main>
          <form action="" method="post">    
            <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div  className="card  text-white"style={{backgroundColor: "#0060fc"}}>
                    <div className="card-body p-5 text-center">
                        <a href="/ingreso" className="text-white-50 fw-bold">Regresar</a>
                     
                        <div className="mb-md-5 mt-md-4 pb-5">
          
                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <p className="text-black-50 mb-5">por favor llena los datos!</p>
                       
                        <div className="form-outline form-white mb-4">
                          <input ref={ccRef} type="text" name="cc" id="typeEmailX" className="form-control form-control-lg" />
                          <label className="form-label" for="typeEmailX">CC</label>
                        </div>
                       
    
                          <div className="form-outline form-white mb-4">
                          <input ref={passwordRef} type="password" name="pass" id="typePasswordX" className="form-control form-control-lg" />
                          <label className="form-label" for="typePasswordX">Password</label>
                        </div>
                        
          
                        <button className="btn btn-outline-light btn-lg px-5" type="button" onClick={login} id="send-signup" name="signup">Entrar</button>
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
export default Login;