import axios from "axios";
import {message} from "antd";
import {reloadData, remove} from "../../Redux/todoSlice";

export const deleteTodo = (id) => {
    return async dispatch => {
        dispatch(reloadData(id))
        try {
            await axios.post('http://localhost:3001/deleteTodo', {id},
                {
                    withCredentials: true,
                    headers: {"Authorization": `Bearer ${document.cookie.split('=')[1]}`},
                })
            dispatch(remove(id))
        } catch (e) {
            message.error('Server error. Failed to remove todo', 3,)
        }
        dispatch(reloadData(id))
    }
}