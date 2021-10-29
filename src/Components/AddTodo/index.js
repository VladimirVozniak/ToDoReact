import "./style.css"
import {useContext} from "react";
import {Context} from "../../context";

const AddTodo = () => {
    const {dispatch, value, setValue} = useContext(Context)
    return (
        <button className="add-task"
                onClick={() => {
                    dispatch({type: "add", text: value});
                    setValue('')
                }}>Add Task</button>
    )
}

export default AddTodo;