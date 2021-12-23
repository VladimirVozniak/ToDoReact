import axios from "axios";
import {message} from "antd";

export const addTodo = async (value, user) => {
    if (!!value)
        try {
            const todo = await axios.post('http://localhost:3001/createTodo',
                {
                    value: value,
                    isChecked: false,
                    user: user,
                },

                {
                    withCredentials: true,
                    headers: {"Authorization": `Bearer ${document.cookie.split('=')[1]}`},
                })
            if (todo.data) {
                return todo.data.data
            }
            window.location.href = '/login'
        } catch (e) {
            message.error('Server error', 3,)
        }
}
