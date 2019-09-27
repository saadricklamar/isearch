import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { cleanUserInput } from '../../Utilities/cleanUserInput';
import { fetchFromITunes } from '../../Utilities/apiCalls';


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
    
    fetchITunes = async e => {
        e.preventDefault();
        let data = await fetchFromITunes(this.state.userInput);
        this.setState({ results: data.results})
    }




    render () {
        return(
            <div className="home">
            <header>
                <h1 className="h1">iSearch</h1>
                <nav>
                    <Link className="about-link" to="/About">
                    About
                    </Link>
                </nav>
            </header>
            <Search grabUserInput={this.grabUserInput} fetchITunes={this.fetchITunes} />
            </div>
            )
    }
   
}

export default Home;