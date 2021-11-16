import axios from "axios";

export const deleteTodo = (id) => {
    axios.post('http://localhost:3001/deleteTodo', {
        id,
        token: JSON.parse(localStorage.getItem('currentUser')).token
    }).catch(e => {
        console.log(e)
    })
}