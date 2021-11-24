import axios from "axios";

export const updateTodo = async (id, elem) => {
    try {
        await axios.post('http://localhost:3001/updateTodoValue', {
                id,
                ...elem,
            },
            {
                headers: {"authorization": JSON.parse(localStorage.getItem('currentUser')).token},
            })
    } catch (e) {
        console.log(e)
    }
}
