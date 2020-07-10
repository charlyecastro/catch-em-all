export const addPokemon = (pokemon) => {
    return {
        type: 'ADD',
        payload: pokemon
    }
}

export const removePokemon = (pokemon) => {
    return {
        type: 'REMOVE',
        payload: pokemon
    }
}