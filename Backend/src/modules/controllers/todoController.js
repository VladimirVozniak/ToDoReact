const Task = require('../../../models')

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
    Task.updateOne({_id: req.body._id}, req.body).then(() => {
        Task.find({_id: req.body._id}).then(result1 => {
            res.send({data: result1})
        })
    }).catch(err => res.send(err))
};

module.exports.checkedTodo = (req, res) => {
    Task.updateOne({_id: req.body._id}, req.body).then(() => {
        Task.find({_id: req.body._id}).then(result1 => {
            res.send({data: result1})
        })
    }).catch(err => res.send(err))
};

module.exports.deleteTodo = (req, res) => {
    Task.deleteOne({_id: req.query.id}).then(() => {
        res.send({data: "id: " + req.query.id + " deleted"})
    }).catch(err => res.send(err))
};