import "./style.css"
import {useState} from "react";
import ToDoList from "../ToDoList";
import InputData from "../Input";
import AddTodo from "../AddTodo";

const App = () => {
    const [todo, setTodo] = useState([])
    const [value, setValue] = useState('')

    const inputValueData = (data) => {
        setValue(data)
    }

    const addTodoElem = () => {
        if (value === '') return;

        setValue('')
        setTodo((prevTodo) => [{value, isChecked: false}, ...prevTodo]);
    }

    const removeTodoElem = (index) => {
        setTodo((prevTodo) => [...prevTodo.filter(elem => elem !== prevTodo[index])])
    }

    const editTodoElem = (value, index) => {
        setTodo((prevTodo) => [...prevTodo.map(elem => elem === prevTodo[index] ? {...elem, value:value} : elem)])
    }

    const checkedTodoElem = (index) => {
        setTodo((prevTodo) => [...prevTodo.map(elem => elem === prevTodo[index] ? {...elem, isChecked: !elem.isChecked} : elem)])
    }

    return (
        <div className='container'>
            <p className='text'>ToDo</p>
            <div className="adding-todo">
                <InputData inputValue={inputValueData} value={value}/>
                <AddTodo addTodo={addTodoElem}/>
            </div>
            {todo.length !== 0 &&
            <div className="todo-group">
                <ToDoList todos={todo}
                          removeTodo={removeTodoElem}
                          editTodo={editTodoElem}
                          checkedTodo={checkedTodoElem}/>
            </div>
            }
        </div>
    )
}

export default App;