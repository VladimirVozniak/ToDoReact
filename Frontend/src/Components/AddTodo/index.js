import "./style.css"
import {useDispatch} from "react-redux";
import {add, getTodo} from "../../Redux/todoSlice";
import axios from "axios";
import {useState} from "react";

const AddTodo = (props) => {
    useState(() => {
        axios.get(`http://localhost:3001/allTodo`)
            .then(res => {
                const todo = res.data
                dispatch(getTodo(todo.data))
            }).catch(e => {
            console.log(e);
        })
    })
    const dispatch = useDispatch()

    return (
        <button className="add-task"
                onClick={async () => {
                    if (props.value)
                        await axios.post("http://localhost:3001/createTodo",
                            {value: props.value, isChecked: false, id: Date.now()})
                            .then(() => {
                                dispatch(add(props.value))
                            }).catch(e => {
                                console.log(e)
                            })
                    props.clearValue()
                }}>Add Task</button>
    )
}

export default AddTodo;