import React, { Component, Fragment } from "react";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import baseTheme from "styles/ThemeConfig";
import "font-awesome/css/font-awesome.min.css";
import "typeface-roboto";
import "styles/App.css";

// components
import HomeComponent from "components/Home";
import About from "components/About";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <ThemeProvider theme={baseTheme}>
          <HomeComponent />
          <About />
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;
