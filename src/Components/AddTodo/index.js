import "./style.css"
import {useContext} from "react";
import {Context} from "../../context";

const AddTodo = () => {
    const {addTodoElem} = useContext(Context)
    return (
        <button className="add-task" onClick={() => addTodoElem()}>Add Task</button>
    )
}

export default AddTodo;