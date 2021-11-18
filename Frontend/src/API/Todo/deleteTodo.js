import axios from "axios";

export const deleteTodo = async (id) => {
    try {
        await axios.post('http://localhost:3001/deleteTodo', {
                id,
            },
            {
                headers: {"authorization": JSON.parse(localStorage.getItem('currentUser')).token},
            })
    } catch (e) {
        console.log(e)
    }
}