import "./style.css"

const AddTodo = (props) => {
    return (
        <button className="add-task" onClick={() => props.addTodo()}>Add Task</button>
    )
}

export default AddTodo;