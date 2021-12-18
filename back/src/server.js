const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors()); //Middleware
app.use(express.json()); //Middleware
app.use(express.urlencoded({extended:true}))
const mongoose = require("mongoose");
const { userRutas } = require("./rutas/userRutas");
const { vehiculoRutas } = require("./rutas/vehiculoRutas");


require("dotenv").config();
//API HOME function es un "callback"
app.get("/", function (req, res){
    res.send("Bienvenidos");
});

app.use("/user", userRutas);
app.use("/vehiculos", vehiculoRutas);


//API consultar lista vehiculo

// app.get("/listavehiculo", function(req, res){
//     res.send(vehiculo);
    
// }) 
    


mongoose.connect(process.env.MONGODB_SERVER_URL)
    .then(res => console.log("Conectado a BD"))
    .catch(error => console.log(error));

app.listen(8080,() =>{
    console.log("Servidor escuchando en el puerto 8080")
} )