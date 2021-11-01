import "./style.css"
import ToDoList from "../ToDoList";
import InputData from "../Input";
import AddTodo from "../AddTodo";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const Todo = () => {
    const todoList = useSelector((state) => state.todo)

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(todoList))
    })

    return (
            <div className='container'>
                <p className='text'>ToDo</p>
                <div className="adding-todo">
                    <InputData/>
                    <AddTodo/>
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