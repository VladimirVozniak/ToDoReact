import axios from "axios";
import {message} from "antd";

const login = async (login, password) => {
    try {
        await axios.post('http://localhost:3001/login',
            {
                login,
                password
            }, {withCredentials: true})

        window.location.href = '/'
    } catch (e) {
        message.error('User not found', 3)
    }
}

export default login