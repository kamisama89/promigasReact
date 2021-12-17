const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors()); //Middleware
app.use(express.json()); //Middleware
app.use(express.urlencoded({extended:true}))
const {vehiculo} = require("./vehiculos");
const mongoose = require("mongoose");
const {vehiculoModel}=require("./modelos/vehiculosModel")
const { userRutas } = require("./rutas/userRutas");


require("dotenv").config();
//API HOME function es un "callback"
app.get("/", function (req, res){
    res.send("Bienvenidos");
});

app.use("/user", userRutas);


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

app.get("/vehiculos/listar", function (req, res) {
    vehiculoModel.find({}, function (err, listaVehi) {
            if (err) {
                return res.status(500).json({ estado: "error", msg: "ERROR: Al buscar Ventas" });
            }
            return res.status(200).json({ estado: "ok", msg: "Ventas encontradas", listaVehi })
        })
    })

app.get("/vehiculos/eliminar", function (req, res) {
    const data = req.body;
    vehiculoModel.deleteOne({placa: data.placa}, function (err) {
            if (err) {
                return res.status(500).json({ estado: "error", msg: "ERROR: Al buscar Ventas" });
            }
            return res.status(200).json({ estado: "ok", msg: "Ventas encontradas"})
        })
    })



mongoose.connect(process.env.MONGODB_SERVER_URL)
    .then(res => console.log("Conectado a BD"))
    .catch(error => console.log(error));

app.listen(8080,() =>{
    console.log("Servidor escuchando en el puerto 8080")
} )