import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { cleanUserInput } from '../../Utilities/cleanUserInput';

export class Home extends Component  {
    constructor() {
        super();
        this.state = {
           userInput: ""

        }
    }

    grabUserInput = e => {
        let cleanedInput = cleanUserInput(e.target.value);
        this.setState({ userInput: cleanedInput });
    }
    
    fetchItunes = e => {
        e.preventDefault();
        console.log('this click event is working')
    }




    render () {
        console.log(this.state.userInput)
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