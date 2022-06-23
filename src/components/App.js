import React from "react";
import "../styles/app.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact patch="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
};

export default App;
