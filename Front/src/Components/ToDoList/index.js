import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import {edit} from "../../Redux/todoSlice";
import {updateTodo} from "../../API/Todo/updateTodo";
import {deleteTodo} from "../../API/Todo/deleteTodo";
import {Spin} from "antd"

const ToDoList = () => {
    const todoList = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    return (
        <>
            {todoList.map((elem, index) =>
                <Spin key={index} spinning={elem.load}>
                    <div className='todo-element'>
                        <input type='checkbox'
                               checked={elem.isChecked}
                               onChange={async (e) => {
                                   await dispatch(updateTodo(elem._id, {isChecked: e.target.checked}))
                               }}
                               className='checkbox'/>
                        <input className={elem.isChecked ? 'todo-text todo-text_disable' : 'todo-text'}
                               value={elem.value}
                               onChange={(e) => {
                                   dispatch(edit([elem._id, e.target.value]))
                               }}
                               onBlur={async () => {
                                   await dispatch(updateTodo(elem._id, {value: elem.value}))
                               }}
                               disabled={elem.isChecked}/>
                        <button className='delete-icon'
                                onClick={async () => {
                                    await dispatch(deleteTodo(elem._id))
                                }}>
                            <svg aria-hidden='true' focusable='false' data-prefix='far' data-icon='trash-alt'
                                 className='svg-inline--fa fa-trash-alt fa-w-14 ' role='img'
                                 xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                                <path fill='currentColor'
                                      d='M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z'/>
                            </svg>
                        </button>
                    </div>
                </Spin>
            )}
        </>
    )
}

export default ToDoList;