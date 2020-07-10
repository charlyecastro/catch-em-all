import React from 'react';
import { Link } from "react-router-dom";

import constants from "./constants.js";

function Home({ children }) {

    return (
        <div className="container">
            <header>
                <nav>
                    <h1>Catch 'Em All</h1>
                    <menu>
                        <ul>
                            <li> <Link to={constants.routes.home}>Home</Link></li>
                            <li><Link to={constants.routes.pokedex}>My Pokedex</Link></li>
                        </ul>
                    </menu>
                </nav>
            </header>
            {children}
            <footer>
                {/* <Link to={constants.routes.home}>Home</Link>
                <Link to={constants.routes.pokedex}>My Pokedex</Link> */}
            </footer>


        </div>

    );
}

export default Home;
