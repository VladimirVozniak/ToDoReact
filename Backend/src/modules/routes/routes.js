const express = require('express');
const router = express.Router();

const {
    getTodos,
    createNewTodo,
    changeTodoInfo,
    deleteTodo
} = require('../controllers/todoController');

// Tasks routes
router.get('/allTodo', getTodos);
router.post('/createTodo', createNewTodo);
router.patch('/updateTodoValue', changeTodoInfo);
router.delete('/deleteTodo', deleteTodo);

//User routes

module.exports = router;