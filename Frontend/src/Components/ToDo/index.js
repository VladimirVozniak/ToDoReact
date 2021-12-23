import "./style.css"
import ToDoList from "../ToDoList";
import InputData from "../Input";
import AddTodo from "../AddTodo";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getAllTodo} from "../../API/Todo/getAllTodo"
import {Spin} from "antd";
import {exitAccount} from "../../API/User/exitAccount";

const Todo = () => {
    const todoList = useSelector((state) => state.todo)
    const [value, setValue] = useState('')
    const [load, setLoad] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTodo())
        if (todoList.length)
            setLoad(false)
        else
            setTimeout(() => setLoad(false), 3000)
    }, [dispatch, todoList.length])

    return (
        <div className='container'>
            <div className='user-container'>
                <div className='exitAccount' onClick={async () => await exitAccount()}/>
            </div>
            <p className='text'>ToDo</p>
            <div className='adding-todo'>
                <InputData value={value} changeValue={(e) => setValue(e)}/>
                <AddTodo value={value} clearValue={() => setValue('')} setLoad={(e) => setLoad(e)}/>
            </div>
            {todoList.length ?
                <div className='todo-group'>
                    <ToDoList/>
                </div> :
                <Spin spinning={load} tip='Searching Todo...'>
                    <div className='todo-group_empty'>
                        <div className='img-empty'/>
                        <p className='text-empty'>No data</p>
                    </div>
                </Spin>
            }
        </div>
    )
}

export default Todo;