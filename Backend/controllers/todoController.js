const Task = require('../models/Todo')

module.exports.getTodos = async (req, res) => {
    await Task.find().then(result => {
        res.send({data: result})
    }).catch(err => res.send(err))
};

module.exports.createNewTodo = async (req, res) => {
    const task = new Task(req.body)
    await task.save().then(result => {
        res.send({data: result})
    }).catch(err => res.send(err))
};

module.exports.changeTodoInfo = async (req, res) => {
   await Task.findOneAndUpdate({_id: req.query.id}, req.body).then(() => {
        res.send({data: "id: " + req.query.id + " deleted"})
    }).catch(err => res.send(err))
};

module.exports.deleteTodo = async (req, res) => {
    await Task.deleteOne({_id: req.query.id}).then(() => {
        res.send({data: "id: " + req.query.id + " deleted"})
    }).catch(err => res.send(err))
};
