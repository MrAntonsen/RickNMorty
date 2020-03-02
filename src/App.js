import React from "react";
import "./App.css";
import CharacterList from "./components/CharacterList/CharacterList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={CharacterList} />
          <Route exact path='/characters/:id' component={CharacterDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
