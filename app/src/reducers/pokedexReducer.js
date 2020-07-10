const pokedexReducer = (state = [], action) => {
    switch (action.type) {
        case `ADD`:
            return [...state, action.payload]
        case `REMOVE`:
            return state.push(action.payload)
        default :
            return state
    }
}

export default pokedexReducer