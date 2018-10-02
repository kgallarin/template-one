import React, { Component, Fragment } from "react";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import Theme from "styles/ThemeConfig";
import "typeface-roboto";
import "styles/App.css";

// components
import Home from "components/Home";
import About from "components/About";

class App extends Component {
  render() {
    let theme = createMuiTheme(Theme);
    return (
      <Fragment>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Home />
          {/* <About /> */}
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;
