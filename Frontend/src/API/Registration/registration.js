import axios from "axios";

const registration = async (login, password) => {
    try {
        const newUser = await axios.post('http://localhost:3001/newUser',
            {
                login,
                password
            })
        localStorage.setItem('currentUser', JSON.stringify(newUser.data))
        window.location.href = '/'
    } catch (e) {
        console.log(e)
    }
}

export default registration