const mongoose = require('mongoose')

const {Schema} = mongoose

const todoScheme = new Schema({
    value: String,
    isChecked: Boolean,
},{versionKey: false})

module.exports = Task = mongoose.model("todos", todoScheme)