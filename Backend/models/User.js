const {Schema,model} = require('mongoose')

const userScheme = new Schema({
    login: String,
    password: String,
},{versionKey: false})

module.exports = model("users", userScheme)