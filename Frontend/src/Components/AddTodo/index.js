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
                    props.setLoad(true)
                    const todo = await addTodo(props.value, user)
                    if (todo) {
                        dispatch(add(todo))
                        props.clearValue()
                    }
                    props.setLoad(false)
                }}>Add Task</button>
    )
}

export default AddTodo;