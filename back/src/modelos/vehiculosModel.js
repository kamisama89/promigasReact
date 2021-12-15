const { model, Schema } = require("mongoose");

const vehiculoSchema = new Schema({
    placa: {
        type: "string",
        unique: true,
        required: true,
        min: 6
    },
    modelo: {
        type: "string",
        required: true
    }
});

const vehiculoModel = model("vehiculos", vehiculoSchema);

exports.vehiculoModel = vehiculoModel;