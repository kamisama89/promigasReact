const { model, Schema } = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

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
vehiculoSchema.plugin(uniqueValidator)
exports.vehiculoModel = vehiculoModel;