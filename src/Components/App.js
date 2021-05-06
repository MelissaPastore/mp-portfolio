import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: `'Barlow', sans-serif;`,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/skills" component={Skills} />
            <Route component={About} />
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
