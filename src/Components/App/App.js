import React from 'react';
import Home from '../Home/Home'
import { Route, Switch, Redirect} from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
