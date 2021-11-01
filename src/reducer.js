const saved = JSON.parse(localStorage.getItem("tasks"))
export const initialTodo = saved !== null ? saved : []

export const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            if (action.text === '') return [...state];
            return [{value: action.text, isChecked: false}, ...state];
        case "edit":
            return [...state.map(elem => elem === state[action.id] ? {...elem, value: action.newText} : elem)]
        case "checked":
            return [...state.map(elem => elem === state[action.id] ? {
                ...elem, isChecked: !elem.isChecked
            } : elem)]
        case "remove":
            return [...state.filter(elem => elem !== state[action.id])]
        default:
            return [...state]
    }
}
