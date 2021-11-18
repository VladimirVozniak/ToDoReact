import axios from "axios";
import {currentUser, getTodo} from "../../Redux/todoSlice";

export const getAllTodo = () => {
    return async dispatch => {
        try {
            const result = await axios.post('http://localhost:3001/allTodo',
                {},
                {
                    headers: {"authorization": JSON.parse(localStorage.getItem('currentUser')).token},
                })
            if (!result.data)
                window.location.href = '/login'
            const currentTodo = result.data.data
            dispatch(currentUser(result.data.id))
            dispatch(getTodo(currentTodo))
        } catch (e) {
            console.log(e)
        }
    }
}