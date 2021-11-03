import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import {checked, edit, remove} from "../../Redux/todoSlice";
import axios from "axios";

const ToDoList = () => {
    const todoList = useSelector((state) => state.todo)
    const dispatch = useDispatch()
    return (
        <>
            {todoList.map((elem, index) =>
                <div key={index} className="todo-element">
                    <input type="checkbox"
                           checked={elem.isChecked}
                           onChange={(e) => {
                               dispatch(checked(elem._id))
                               axios.patch('http://localhost:3001/updateTodoValue?id=' + elem._id, {isChecked: e.target.checked})
                                   .catch((error) => {
                                       console.log(error)
                                   })
                           }}
                           className="checkbox"/>
                    <input className={elem.isChecked ? 'todo-text todo-text_disable' : 'todo-text'}
                           value={elem.value}
                           onChange={(e) => {
                               dispatch(edit([elem._id, e.target.value]))
                               axios.patch('http://localhost:3001/updateTodoValue?id=' + elem._id, {value: e.target.value})
                                   .catch((error) => {
                                       console.log(error)
                                   });
                           }}
                           disabled={elem.isChecked}/>
                    <button className="delete-icon"
                            onClick={() => {
                                axios.delete('http://localhost:3001/deleteTodo?id=' + elem._id, {}, {_id: elem._id})
                                    .then(() => {
                                        dispatch(remove(elem._id))
                                    }).catch((error) => {
                                    console.log(error)
                                });
                            }}>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt"
                             className="svg-inline--fa fa-trash-alt fa-w-14 " role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                  d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"/>
                        </svg>
                    </button>
                </div>
            )}
        </>
    )
}

export default ToDoList;