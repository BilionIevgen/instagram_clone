import React from "react";
import { render } from "react-dom";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";
import App from "./App";
import { BrowserRouter as Router} from "react-router-dom";

render(
  <MuiThemeProvider theme={theme}>
    <Router>
        <CssBaseline />
        <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
