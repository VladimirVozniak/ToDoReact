const express = require('express');
const router = express.Router();
const {check} = require('express-validator')

const {
    getTodos,
    createNewTodo,
    changeTodoInfo,
    deleteTodo,
    deleteAllTodo
} = require('../controllers/todoController');

const {
    checkToken,
    login,
    registration,
} = require('../controllers/userController')

// Tasks routes
router.post('/allTodo', checkToken, getTodos);
router.post('/createTodo', checkToken, createNewTodo);
router.post('/updateTodoValue', checkToken, changeTodoInfo);
router.post('/deleteTodo', checkToken, deleteTodo);

//User routes
router.post('/checkToken', checkToken)
router.post('/login', login)
router.post('/newUser', [
    check('login', 'Username must not be empty').notEmpty(),
    check('password', 'Password must be more than 4 and less than 10 characters').isLength({min: 4, max: 10})
], registration)

module.exports = router;