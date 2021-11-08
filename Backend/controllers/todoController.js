const Task = require('../models/Todo')

module.exports.getTodos = (req, res) => {
    Task.find().then(result => {
        res.send({data: result})
    }).catch(err => res.send(err))
};

module.exports.createNewTodo = (req, res) => {
    const task = new Task(req.body)
    task.save().then(result => {
        res.send({data: result})
    }).catch(err => res.send(err))
};

module.exports.changeTodoInfo = (req, res) => {
    Task.findOneAndUpdate({_id: req.query.id}, req.body).then(() => {
        res.send({data: "id: " + req.query.id + " deleted"})
    }).catch(err => res.send(err))
};

module.exports.deleteTodo = (req, res) => {
    Task.deleteOne({_id: req.query.id}).then(() => {
        res.send({data: "id: " + req.query.id + " deleted"})
    }).catch(err => res.send(err))
};