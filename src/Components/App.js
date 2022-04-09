import { Route, Switch } from "react-router-dom";

import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";
import React from "react";
import Resume from "./Resume";
import Skills from "./Skills";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: `'Barlow', sans-serif;`,
    color: "white",
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
          </Switch>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
