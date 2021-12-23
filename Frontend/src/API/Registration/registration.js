import axios from "axios";
import {message} from "antd";

const registration = async (login, password) => {
    try {
        await axios.post('http://localhost:3001/newUser',
            {
                login,
                password
            })
        window.location.href = '/'
    } catch (e) {
        let errors = ''
        if (login === '')
            errors += 'Username must not be empty. '
        if (password.length < 4 || password.length > 10)
            errors += 'Password must be 4-10 characters long. '
        if (errors === '')
            errors = 'This user exists'

        message.info(errors, 3,)
    }
}

export default registration