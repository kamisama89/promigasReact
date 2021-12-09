const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const {vehiculo} = require("./vehiculos")


app.get("/", function(req, res){
    res.send("Bienvenido al mundo dev!!")
})

//API consultar lista vehiculo

app.get("/listavehiculo", function(req, res){
    res.send(vehiculo);
    
}) 

app.listen(8080,() =>{
    console.log("Servidor escuchando en el puerto 8080")
} )