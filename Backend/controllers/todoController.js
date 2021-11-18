const Task = require('../models/Todo')
const jwt = require("jsonwebtoken");
const {secret} = require("../config");

module.exports.getTodos = async (req, res) => {
    try {
        const token = req.headers.authorization
        const id = jwt.verify(token, secret).id
        const allTodos = await Task.find({user: id})
        res.send({data: allTodos})
    } catch (e) {
        res.send(e)
    }
};

module.exports.createNewTodo = async (req, res) => {
    try {
        const token = req.headers.authorization
        const id = jwt.verify(token, secret).id
        await Task.create({
            value: req.body.value,
            isChecked: false,
            user_id: id
        }, (e, newTask) => {
            if (e) return e
            res.send({data: newTask})
        })
    } catch (e) {
        res.send(e)
    }
};

module.exports.changeTodoInfo = async (req, res) => {
    try {
        const {value, isChecked, id} = req.body
        await Task.findOneAndUpdate({_id: id}, {value, isChecked})
        res.send()
    } catch (e) {
        res.send(e)
    }
};

module.exports.deleteTodo = async (req, res) => {
    try {
        await Task.deleteOne({_id: req.body.id})
        res.send()
    } catch (e) {
        res.send(e)
    }
};
