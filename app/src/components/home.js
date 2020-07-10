import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import constants from "./constants.js";
import Axios from 'axios';

function Home() {
    const [allPokemon, setAllPokemon] = useState([])
    useEffect(() => {
        fetchAll()
    }, [])

    const fetchAll = () => {
        Axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.data)
            .then(pokemons => {
                console.log(pokemons.results)
                setAllPokemon(pokemons.results)
            })
    }

    return (
        <div className="container">
            <h1>Pokemon</h1>
            <div style={{ display: "grid", gridTemplateColumns: 'repeat(4, 1fr' }}>
                {allPokemon.map(poke => {
                    return <div>
                        <Link to={`/pokemon/${poke.name}`} > <h1>{poke.name}</h1></Link>
                    </div>
                })
                }
            </div>
            <Link to={constants.routes.pokedex}>My Pokedex</Link>

        </div>
    );
}

export default Home;
