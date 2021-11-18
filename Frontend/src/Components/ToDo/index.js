import "./style.css"
import ToDoList from "../ToDoList";
import InputData from "../Input";
import AddTodo from "../AddTodo";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
// import {currentUser} from "../../Redux/todoSlice";
import {getAllTodo} from '../../API/Todo/getAllTodo'

const Todo = () => {
    const todoList = useSelector((state) => state.todo)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTodo())
    },[dispatch])

    return (
        <div className='container'>
            <div className='user-container'>
                <Link to='/login'>
                    <div className='exitAccount' onClick={() => localStorage.setItem('currentUser', {token: ''})}/>
                </Link>
            </div>
            <p className='text'>ToDo</p>
            <div className="adding-todo">
                <InputData value={value} changeValue={(e) => setValue(e)}/>
                <AddTodo value={value} clearValue={() => setValue('')}/>
            </div>
            {todoList.length !== 0 &&
            <div className="todo-group">
                <ToDoList/>
            </div>
            }
        </div>
    )
}

export default Todo;