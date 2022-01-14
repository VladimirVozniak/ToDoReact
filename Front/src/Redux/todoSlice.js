import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todo: [],
        user: '',
        load: false
    },
    reducers: {
        startLoading(state) {
            state.load = true
        },
        endLoading(state) {
            state.load = false
        },
        currentUser(state, action) {
            state.user = action.payload
        },
        getTodo(state, action) {
            state.todo = action.payload
        },
        add(state, action) {
            state.todo.push({...action.payload})
        },
        edit(state, action) {
            state.todo = state.todo.map(elem => elem._id === action.payload[0] ? {
                ...elem, value: action.payload[1]
            } : elem)
        },
        checked(state, action) {
            state.todo = state.todo.map(elem => elem._id === action.payload ? {
                ...elem, isChecked: !elem.isChecked
            } : elem)
        },
        remove(state, action) {
            state.todo = state.todo.filter(elem => elem._id !== action.payload)
        },
        reloadData(state, action) {
            state.todo = state.todo.map(elem => elem._id === action.payload ? {
                ...elem, load: !elem.load
            } : elem)
        }
    }
})

export const {
    startLoading, endLoading, currentUser,
    getTodo, add, edit, checked, remove, reloadData
} = todoSlice.actions
export default todoSlice.reducer