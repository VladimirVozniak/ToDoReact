import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todo: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [],
        text: '',
        id: 0
    },
    reducers: {
        newText(state, action) {
            state.text = action.payload
        },
        add(state, action) {
            state.todo.unshift({value: action.payload, isChecked: false, id: state.id++})
        },
        edit(state, action) {
            state.todo = state.todo.map(elem => elem.id === action.payload[0] ? {
                value: action.payload[1], isChecked: elem.isChecked,
                id: elem.id
            } : elem)
        },
        checked(state, action) {
            state.todo = state.todo.map(elem => elem.id === action.payload ? {
                ...elem, isChecked: !elem.isChecked
            } : elem)
        },
        remove(state, action) {
            state.todo = state.todo.filter(elem => elem.id !== action.payload)
        }
    }
})

export const {newText, add, edit, checked, remove} = todoSlice.actions
export default todoSlice.reducer