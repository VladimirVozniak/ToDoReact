const Task = require('../models/Todo')

module.exports.getTodos = async (req, res) => {
    try {
        const allTodos = await Task.find()
        res.send({data: allTodos})
    } catch (e) {
        res.send(e)
    }
};

module.exports.createNewTodo = async (req, res) => {
    try {
        const newTask = new Task(req.body)
        const result = await newTask.save()
        res.send({data: result})
    } catch (e) {
        res.send(e)
    }
};

module.exports.changeTodoInfo = async (req, res) => {
    try {
        await Task.findOneAndUpdate({_id: req.query.id}, req.body)
    } catch (e) {
        res.send(e)
    }
};

module.exports.deleteTodo = async (req, res) => {
    try {
        await Task.deleteOne({_id: req.query.id})
        res.send({data: "id: " + req.query.id + " deleted"})
    } catch (e) {
        res.send(e)
    }
};
