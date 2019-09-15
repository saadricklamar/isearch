import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search'

export class Home extends Component  {
    constructor() {
        super();
        this.state = {

        }
    }
    




    render () {
        return(
            <div>
            <header>
                <h1 className="h1">iSearch</h1>
                <nav>
                    <Link className="about-link" to="/About">
                    About
                    </Link>
                </nav>
            </header>
            <Search />
            </div>

            )


    }
   
}

export default Home;