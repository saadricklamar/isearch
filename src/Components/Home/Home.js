import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Music from "../Music/Music";
import Movies from "../Movies/Movies";
import Television from "../Television/Television";
import { cleanUserInput } from "../../Utilities/cleanUserInput";
import { fetchFromITunes } from "../../Utilities/apiCalls";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      results: [],
      error: ""
    };
  }

  grabUserInput = e => {
    let cleanedInput = cleanUserInput(e.target.value);
    this.setState({ userInput: cleanedInput });
  };

  fetchITunes = async e => {
    e.preventDefault();
    let data = await fetchFromITunes(this.state.userInput);
    this.setState({ results: data.results });
  };

  render() {
    console.log(this.state.results);
    return (
      <div className="home">
        <header className="home-header">
          <h1 className="h1">
            <span>i</span>Search
          </h1>
          <nav>
            <Link className="about-link" to="/About">
              About
            </Link>
          </nav>
        </header>
        <Search
          grabUserInput={this.grabUserInput}
          fetchITunes={this.fetchITunes}
        />
        <section className="displayed-results">
          <Music results={this.state.results} />
          <Movies results={this.state.results} />
          <Television results={this.state.results} />
        </section>
      </div>
    );
  }
}

export default Home;
