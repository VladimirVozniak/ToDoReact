import axios from "axios";
import {message} from "antd";

export const exitAccount = async () => {
    try {
        await axios.post('http://localhost:3001/exitAccount',
            {},
            {withCredentials: true})
        window.location.href = '/login'
    } catch (e) {
        message.error('Server error', 3,)
        console.log(e)
    }
}