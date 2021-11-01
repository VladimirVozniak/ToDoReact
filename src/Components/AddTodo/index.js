import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import {add, newText} from "../../Redux/todoSlice";

const AddTodo = () => {
    const text = useSelector((state) => state.text)
    const dispatch = useDispatch()
    return (
        <button className="add-task"
                onClick={() => {
                    dispatch(add(text))
                    dispatch(newText(''))
                }}>Add Task</button>
    )
}

export default AddTodo;