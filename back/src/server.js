const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors()); //Middleware
app.use(express.json()); //Middleware
app.use(express.urlencoded({extended:true}))
const {vehiculo} = require("./vehiculos");
const mongoose = require("mongoose");
const {vehiculoModel}=require("./modelos/vehiculosModel")


require("dotenv").config();
//API HOME function es un "callback"
app.get("/", function (req, res){
    res.send("Bienvenidos");
});

//API consultar lista vehiculo

app.get("/listavehiculo", function(req, res){
    res.send(vehiculo);
    
}) 

app.post("/vehiculos/guardar", function (req, res) {
    
    const data = req.body;
    const vehi = new vehiculoModel(data);
    vehi.save(function (error) {
        if (error) {
            console.log(error);
            return res.send({ estado: "error", msg: "ERROR: Al guardar vehiculo" });
        }
        res.send({ estado: "ok", msg: "vehiculo Guardado :)" });
    })

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

mongoose.connect(process.env.MONGODB_SERVER_URL)
    .then(res => console.log("Conectado a BD"))
    .catch(error => console.log(error));

app.listen(8080,() =>{
    console.log("Servidor escuchando en el puerto 8080")
} )