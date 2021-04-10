import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={About} />
          <Route component={About} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
