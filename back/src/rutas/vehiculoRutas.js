const { Router } = require("express");
const vehiculoRutas = Router();
const { vehiculoModel } = require("../modelos/vehiculosModel");



vehiculoRutas.post("/guardar", function (req, res) {
    
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

vehiculoRutas.get("/listar", function (req, res) {
    vehiculoModel.find({}, function (err, listaVehi) {
            if (err) {
                return res.status(500).json({ estado: "error", msg: "ERROR: Al buscar Ventas" });
            }
            return res.status(200).json({ estado: "ok", msg: "Ventas encontradas", listaVehi })
        })
    })

vehiculoRutas.post("/eliminar", async function (req, res) {
    
    const {placa} = req.body;
    // const vehi= await vehiculoModel.findOne({placa})
    var vehi=await vehiculoModel.findOneAndDelete({placa})
    if (!vehi) {
        return res.status(500).json({ estado: "error", msg: "Vehículo no encontrado" });
    }
    return res.status(200).json({ estado: "ok", msg: "Vehículo eliminado"})
    })

vehiculoRutas.post("/editar", async function (req, res) {
    
    const data = req.body;
    // const vehi= await vehiculoModel.findOne({placa})
    var vehi=await vehiculoModel.updateOne({placa: data.placa},{$set:{modelo:data.modelo}})

    if (!vehi) {
        return res.status(500).json({ estado: "error", msg: "Vehículo no encontrado" });
    }
    return res.status(200).json({ estado: "ok", msg: "Vehículo editado"})
    })

exports.vehiculoRutas = vehiculoRutas;