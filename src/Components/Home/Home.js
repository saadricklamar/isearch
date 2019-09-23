import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { cleanUserInput } from '../../Utilities/cleanUserInput';


export class Home extends Component  {
    constructor() {
        super();
        this.state = {
           userInput: "",
           results: [],
           error: ""

        }
    }

    grabUserInput = e => {
        let cleanedInput = cleanUserInput(e.target.value);
        this.setState({ userInput: cleanedInput });
    }
    
    fetchItunes = e => {
        e.preventDefault();
        fetch(`https://itunes.apple.com/search?term=${this.state.userInput}`)
        .then(response => response.json())
        .then(data => this.setState({ results: data.results}))
        .catch(error => this.setState({ error }))
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
            <Search grabUserInput={this.grabUserInput} fetchItunes={this.fetchItunes} />
            </div>

            )


    }
   
}

export default Home;