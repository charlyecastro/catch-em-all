import pokedexReducer from './pokedexReducer.js'

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    pokedex : pokedexReducer
})

export default allReducers