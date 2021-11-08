const {Schema,model} = require('mongoose')

const todoScheme = new Schema({
    value: String,
    isChecked: Boolean,
},{versionKey: false})

module.exports = model("todos", todoScheme)