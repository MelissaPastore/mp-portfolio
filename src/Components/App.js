import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import Skills from "./Skills";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/skills" component={Skills} />
          <Route component={About} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
