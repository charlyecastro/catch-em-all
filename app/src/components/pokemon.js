import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import { Statistic, message, Button } from 'antd';
import constants from "./constants.js";
import { useDispatch } from 'react-redux'
import { addPokemon } from '../actions'
import Layout from "./layout"
import 'antd/dist/antd.css';
import pokeball from '../assets/pokeball.png'



import '../styles/styles.css'

function Pokemon({ match }) {

    const dispatch = useDispatch()
    const [pokeStats, setPokeStats] = useState('')
    const [catchAttempt, setCatchAttempt] = useState(false)
    const [isCaught, setIsCaught] = useState(false)


    const [pokeImg, setPokeImg] = useState('')
    useEffect(() => {
        fetchPokemonStats()
    }, [])

    const fetchPokemonStats = () => {
        Axios.get(`${process.env.REACT_APP_BASE_URL}/pokemon/${match.params.pokeID}`)
            .then(response => response.data)
            .then(pokemon => {
                setPokeStats(pokemon)
                console.log(pokemon)
                // setPokeImg(pokemon.sprites.front_default)
                setPokeImg(`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`)
                message.warning(`A wild ${match.params.pokeID} appeared`)

            })
        // .catch(err => console.log(err)
    }


    const randomCatch = () => {
        setCatchAttempt(true)
        setTimeout(() => {
            catchResult()
        }, 3000);
    }

    const catchResult = () => {
        let isCaught = Math.random() >= 0.5;
        if (isCaught) {
            setCatchAttempt(false)
            message.error(`${match.params.pokeID} escaped!`);


        } else {
            setIsCaught(true)
            dispatch(addPokemon(pokeStats))
            message.success(`Congratulations! you caught ${match.params.pokeID}! Go check your pokedex`);
        }
    }

    return (
        <Layout>
            <div>
                <div>
                    <h1>{match.params.pokeID}</h1>
                    {pokeStats ?
                        <div className="grid-2" style={{ columnGap: "5rem" }}>
                            {!catchAttempt ?
                                <img className="poke-img" src={pokeImg} />
                                :
                                <div className="center-item">
                                    <img id="poke-spin" src={pokeball} style={isCaught ? { animationPlayState: "paused" } : {}} />
                                </div>
                            }
                            <div className="grid-2" >
                                <Statistic title="Height" value={pokeStats.height} />
                                <Statistic title="Weight" value={pokeStats.weight} />
                                {pokeStats.stats.map((stat => {
                                    return <Statistic title={stat.stat.name} value={stat.base_stat} suffix="/ 100" />

                                }))
                                }
                            </div>
                        </div>
                        :
                        <p>loading</p>
                    }
                    {!isCaught ? <Button type="primary" danger onClick={randomCatch}>Catch {match.params.pokeID}</Button> : undefined}
                    <Link to={constants.routes.home}><Button danger>Leave</Button></Link>
                </div>
            </div>

        </Layout>
    );
}

export default Pokemon;
