export const initialTodo = []

export const reducer = (state, action) => {
    switch (action.type) {
        case "add":
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
            return state
    }
}