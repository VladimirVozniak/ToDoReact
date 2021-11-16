const Task = require('../models/Todo')

module.exports.getTodos = async (req, res) => {
    try {
        const allTodos = await Task.find({user: req.body.user.id})
        res.send({...req.body.user, data: allTodos})
    } catch (e) {
        res.send(e)
    }
};

module.exports.createNewTodo = async (req, res) => {
    try {
        const newTask = new Task({
            value: req.body.value,
            isChecked: false,
            user: req.body.user.id
        })
        const result = await newTask.save()
        res.send({data: result})
    } catch (e) {
        res.send(e)
    }
};

module.exports.changeTodoInfo = async (req, res) => {
    try {
        const {value, isChecked, id} = req.body
        await Task.findOneAndUpdate({_id: id}, {value, isChecked})
    } catch (e) {
        res.send(e)
    }
};

module.exports.deleteTodo = async (req, res) => {
    try {
        await Task.deleteOne({_id: req.body.id})
        res.send({data: "id: " + req.body.id + " deleted"})
    } catch (e) {
        res.send(e)
    }
};