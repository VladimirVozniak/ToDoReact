import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todo: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [],
    },
    reducers: {
        add(state, action) {
            state.todo.unshift({value: action.payload, isChecked: false, id: Date.now()})
        },
        edit(state, action) {
            state.todo = state.todo.map(elem => elem.id === action.payload[0] ? {
                value: action.payload[1], isChecked: elem.isChecked,
                id: Date.now()
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