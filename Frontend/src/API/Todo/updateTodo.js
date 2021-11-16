import axios from "axios";

export const updateTodo=(id,elem)=>{
    axios.post('http://localhost:3001/updateTodoValue', {
        id,
        ...elem,
        token: JSON.parse(localStorage.getItem('currentUser')).token
    })
        .catch((error) => {
            console.log(error)
        })
}