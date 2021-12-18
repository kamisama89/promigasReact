const { genSalt, hash } = require("bcryptjs");
const { model, Schema } = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
    usuario: {
        type: "string",
        unique: true,
        required: true
    },
    password: {
        type: "string",
        required: true,
        minlength: 6
    
    },
    cc: {
        type: "number",
        unique:true,
        required: true
    }
});

userSchema.pre("save", async function (next) {
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
    next();
});

const userModel = model("users", userSchema);
userSchema.plugin(mongooseUniqueValidator)

exports.userModel = userModel;