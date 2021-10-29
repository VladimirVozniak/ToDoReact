import "./style.css"
import {useReducer, useState} from "react";
import ToDoList from "../ToDoList";
import InputData from "../Input";
import AddTodo from "../AddTodo";
import {Context} from "../../context";
import {initialTodo, reducer} from "../../reducer";

const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initialTodo)
    const [value, setValue] = useState('')

    return (
        <Context.Provider value={{state, dispatch, value, setValue}}>
            <div className='container'>
                <p className='text'>ToDo</p>
                <div className="adding-todo">
                    <InputData/>
                    <AddTodo/>
                </div>
                {state.length !== 0 &&
                <div className="todo-group">
                    <ToDoList/>
                </div>
                }
            </div>
        </Context.Provider>
    )
}

export default Todo;