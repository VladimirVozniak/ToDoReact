import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todo: []
    },
    reducers: {
        getTodo(state, action) {
            state.todo = action.payload
        },
        add(state, action) {
            state.todo.push({value: action.payload, isChecked: false, id: Date.now()})
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

export const {getTodo, add, edit, checked, remove} = todoSlice.actions
export default todoSlice.reducer