import axios from "axios";
import {message} from "antd";
import {checked, edit, reloadData} from "../../Redux/todoSlice";

export const updateTodo = (id, elem) => {
    return async dispatch => {
        dispatch(reloadData(id))
        try {
            await axios.post('http://localhost:3001/updateTodoValue', {
                    id,
                    ...elem,
                },
                {
                    withCredentials: true,
                    headers: {"Authorization": `Bearer ${document.cookie.split('=')[1]}`},
                })

            dispatch(Object.keys(elem)[0] === 'value' ? edit(id, elem) : checked(id))
        } catch (e) {
            message.error('Server error. Failed to add todo', 3,)
        }
        dispatch(reloadData(id))
    }
}
