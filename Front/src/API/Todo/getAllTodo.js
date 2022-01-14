import axios from "axios";
import {currentUser, getTodo} from "../../Redux/todoSlice";
import {message} from "antd";

export const getAllTodo = () => {
    return async dispatch => {
        try {
            const result = await axios.post('http://localhost:3001/allTodo',
                {},
                {
                    withCredentials: true,
                    headers: {"Authorization": `Bearer ${document.cookie.split('=')[1]}`},
                })

            if (!result.data)
                window.location.href = '/login'
            const currentTodo = result.data.data

            currentTodo.map(elem => elem.load = false)

            dispatch(currentUser(result.data.id))
            dispatch(getTodo(currentTodo))
        } catch (e) {
            message.error('Server error. Failed to get todo list', 3)
        }
    }
}