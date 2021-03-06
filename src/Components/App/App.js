import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Favorites from "../Favorites/Favorites";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exapct path="/Favorites" component={Favorites} />
        <Route exapct path="/About" component={About} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
