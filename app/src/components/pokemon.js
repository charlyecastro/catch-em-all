import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import constants from "./constants.js";
import { useDispatch } from 'react-redux'
import { addPokemon } from '../actions'
import Layout from "./layout"


import '../styles/styles.css'

function Pokemon({ match }) {

    const dispatch = useDispatch()
    const [pokeStats, setPokeStats] = useState('')
    const [pokeImg, setPokeImg] = useState('')
    useEffect(() => {
        fetchPokemonStats()
    }, [])

    const fetchPokemonStats = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${match.params.pokeID}`)
            .then(response => response.data)
            .then(pokemon => {
                setPokeStats(pokemon)
                console.log(pokemon)
                setPokeImg(`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`)

            })
        // .catch(err => console.log(err)
    }

    return (
        <Layout>
            <div>
                <div>
                    <h1>Pokemon</h1>
                    <p>{match.params.pokeID}</p>
                    <div className="img-wrap">
                        <img className="poke-img" src={pokeImg} />
                        <div style={{ width: '100%' }}>
                            <ul>
                                <li>Height: {pokeStats.height} </li>
                                <li>Weigth: {pokeStats.weight}</li>
                                <li>type</li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={() => { dispatch(addPokemon(pokeStats)) }}>Catch {match.params.pokeID}</button>
                </div>
            </div>
        </Layout>
    );
}

export default Pokemon;
