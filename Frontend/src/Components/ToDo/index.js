import "./style.css"
import ToDoList from "../ToDoList";
import InputData from "../Input";
import AddTodo from "../AddTodo";
import {useSelector} from "react-redux";
import {useState} from "react";

const Todo = () => {
    const todoList = useSelector((state) => state.todo)
    const [value, setValue] = useState('')

    return (
        <div className='container'>
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