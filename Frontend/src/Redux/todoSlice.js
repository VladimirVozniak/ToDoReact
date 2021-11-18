import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todo: [],
        user: ''
    },
    reducers: {
        currentUser(state, action) {
            state.user = action.payload
        },
        getTodo(state, action) {
            state.todo = action.payload
        },
        add(state, action) {
            state.todo.push({value: action.payload, isChecked: false})
        },
        edit(state, action) {
            state.todo = state.todo.map(elem => elem._id === action.payload[0] ? {
                value: action.payload[1], isChecked: elem.isChecked,
                _id: elem._id
            } : elem)
        },
        checked(state, action) {
            state.todo = state.todo.map(elem => elem._id === action.payload ? {
                ...elem, isChecked: !elem.isChecked
            } : elem)
        },
        remove(state, action) {
            state.todo = state.todo.filter(elem => elem._id !== action.payload)
        }
    }
})

export const {currentUser, getTodo, add, edit, checked, remove} = todoSlice.actions
export default todoSlice.reducer