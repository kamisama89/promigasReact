const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors()); //Middleware
app.use(express.json()); //Middleware
app.use(express.urlencoded({extended:true}))
const {vehiculo} = require("./vehiculos")

//API HOME function es un "callback"
app.get("/", function (req, res){
    res.send("Bienvenidos");
});

//API consultar lista vehiculo

app.get("/listavehiculo", function(req, res){
    res.send(vehiculo);
    
}) 


//API consultar productos
app.get("/producto/consultar/:name", function(req, res){
    const name=req.params.name;
    const prod=productos.find(p=>p.title.toLowerCase()===name.toLowerCase());
    let mensaje="NO encontrado";
    let estado="error";
    if (prod != null && prod!=undefined){
        mensaje="encontrado";
        estado="ok";
    }
    res.send({estado:estado, msg:mensaje, data:prod});
})

app.listen(8080,() =>{
    console.log("Servidor escuchando en el puerto 8080")
} )