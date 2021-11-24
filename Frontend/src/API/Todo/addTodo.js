import axios from "axios";

export const addTodo = async (value, user) => {
    if (!!value)
        try {
            const todo = await axios.post("http://localhost:3001/createTodo",
                {
                    value: value,
                    isChecked: false,
                    user: user,
                },
                {
                    headers: {'authorization': JSON.parse(localStorage.getItem('currentUser')).token}
                })
            if (todo.data) {
                return todo.data.data
            }
            window.location.href = '/login'
        } catch (e) {
            console.log(e)
        }
}
