import { createMuiTheme } from "@material-ui/core/styles";

const baseTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fff",
      dark: "rgba(0,0,0,0)",
      contrastText: "#fff"
    },
    secondary: {
      main: "#edc951",
      dark: "#282828",
      contrastText: "#282828"
    },
    error: {
      main: "#fff",
      contrastText: "#fafafa"
    },
    divider: "#dadada",
    background: {
      paper: "transparent",
      header: "#333333",
      default: "#333333"
    },
    menu: {
      backgroundColor: "#ffeb3b"
    }
  }
});

export default baseTheme;
