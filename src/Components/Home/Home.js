import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
    <header>
        <h1>iSearch</h1>
        <nav>
            <Link className="aboutLink" to="/About">
            About
            </Link>
        </nav>
    </header>
    )
}

export default Home;