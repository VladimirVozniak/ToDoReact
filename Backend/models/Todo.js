const mongoose = require("mongoose");
const {Schema, model} = require('mongoose')

const todoScheme = new Schema({
    value: String,
    isChecked: Boolean,
    user: String,
}, {versionKey: false})

module.exports = model("todos", todoScheme)