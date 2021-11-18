import axios from "axios";

const login = async (login, password) => {
    try {
        const user = await axios.post(`http://localhost:3001/login`,
            {
                login,
                password
            })
        localStorage.setItem('currentUser', JSON.stringify(user.data))
        window.location.href = '/'
    } catch (e) {
        console.log(e)
    }
}

export default login