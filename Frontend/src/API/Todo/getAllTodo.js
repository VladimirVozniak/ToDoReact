import axios from "axios";

export const getAllTodo = async () => {
    try {
        const result = await axios.post('http://localhost:3001/allTodo', {
            token: JSON.parse(localStorage.getItem('currentUser')).token,
            user: ''
        })
        if (result.data)
            return result
        window.location.href = '/login'
    } catch (e) {
        console.log(e)
    }
}