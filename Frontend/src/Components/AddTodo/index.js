import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../API/Todo/addTodo";
import {add} from "../../Redux/todoSlice";

const AddTodo = (props) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <button className="add-task"
                onClick={async () => {
                    const todo = await addTodo(props.value, user)
                    if (todo) {
                        dispatch(add(props.value))
                        props.clearValue()
                    }
                }}>Add Task</button>
    )
}

export default AddTodo;