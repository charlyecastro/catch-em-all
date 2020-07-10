import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Layout from "./layout"
import constants from "./constants.js";
import Axios from 'axios';
import bushImg from '../assets/bush.png'

function Home() {
    const [allPokemon, setAllPokemon] = useState([])
    useEffect(() => {
        fetchAll()
    }, [])

    const fetchAll = () => {
        Axios.get(`${process.env.REACT_APP_BASE_URL}/pokemon`)
            .then(response => response.data)
            .then(pokemons => {
                console.log(pokemons.results)
                setAllPokemon(pokemons.results)
            })
    }

    return (
        <Layout>
            <div>
                <h1>Viridian Forest</h1>
                <div className="forest-grid">
                    {allPokemon.map(poke => {
                        return <div>
                            <Link className="center-item" to={`/pokemon/${poke.name}`} > <img className="bush-img" src={bushImg} /></Link>
                        </div>
                    })
                    }
                </div>
            </div>
        </Layout>
    );
}

export default Home;
