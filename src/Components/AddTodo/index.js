import "./style.css"
import {useDispatch} from "react-redux";
import {add} from "../../Redux/todoSlice";

const AddTodo = (props) => {
    const dispatch = useDispatch()
    return (
        <button className="add-task"
                onClick={() => {
                    dispatch(add(props.value))
                    props.clearValue()
                }}>Add Task</button>
    )
}

export default AddTodo;