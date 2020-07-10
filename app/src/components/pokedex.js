import React from 'react';
import { Link } from "react-router-dom";

import constants from "./constants.js";
import { useSelector } from 'react-redux'

function Home() {
    let pokeList = useSelector(state => state.pokedex)
    console.log(pokeList)

    return (
        <div className="container">
            <h1>Pokedex</h1>
            <div className="grid">
                {pokeList.map(pokemon => {
                    return <div>
                        <img src={pokemon.sprites.front_default} />
                        <p>{pokemon.name}</p>
                    </div>

                })}
            </div>
            <Link to={constants.routes.home}>Home</Link>

        </div>

    );
}

export default Home;
