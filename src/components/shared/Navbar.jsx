import { AppBar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useNavbarStyles } from "../../styles";
import logo from "../../images/logo.png";

function Navbar() {
  const classes = useNavbarStyles();
  return (
    <AppBar className={classes.appBar}>
      <Logo />
    </AppBar>
  );
}

function Logo() {
  const classes = useNavbarStyles();
  return (
    <div className={classes.logoContainer}>
      <Link to="/">
        <div className={classes.logoWrapper}>
          <img src={logo} alt="InstagramLogo" />
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
