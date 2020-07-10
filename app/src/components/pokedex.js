import React from 'react';
import { Link } from "react-router-dom";
import Layout from "./layout"

import constants from "./constants.js";
import { useSelector } from 'react-redux'

function Home() {
    let pokeList = useSelector(state => state.pokedex)
    console.log(pokeList)

    return (
        <Layout>
            <div>
                <h1>My Pokedex</h1>
                <div className="grid">
                    { pokeList.length > 0 ?  pokeList.map(pokemon => {
                        return <div>
                            <img src={pokemon.sprites.front_default} />
                            <p>{pokemon.name}</p>
                        </div>
                   
                    })
                    :
                    <p>Go Catch Some Pokemon!</p>}
                </div>
            </div>
        </Layout>
    );
}

export default Home;
