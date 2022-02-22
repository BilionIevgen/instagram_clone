import {
  Button,
  Card,
  CardHeader,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/shared/Seo";
import { useLoginPageStyles } from "../styles";
import FacebookIconBlue from "../images/facebook-icon-blue.svg";
import FacebookIconWhite from "../images/facebook-icon-white.png";
function LoginPage() {
  const classes = useLoginPageStyles();

  return (
    <>
      <SEO title="Login" />
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader}></CardHeader>
            <form>
              <TextField
                fullWidth
                variant="filled"
                label="Username"
                margin="dense"
                className={classes.textField}
                autoComplete="username"
              />
              <TextField
                fullWidth
                variant="filled"
                label="Password"
                margin="dense"
                type="password"
                className={classes.textField}
                autoComplete="current-password"
              />
              <Button
                variant="contained"
                className={classes.button}
                fullWidth
                color="primary"
                type="submit"
              >
                {" "}
                Log In
              </Button>
            </form>
            <div className={classes.orContainer}>
              <div className={classes.orLine}></div>
              <div>
                <Typography variant="body2" color="textSecondary">
                  Or
                </Typography>
              </div>
              <div className={classes.orLine}></div>
            </div>
            <LoginWithFacebook color="secondary" iconColor="blue" />
            <Button fullWidth color="secondary">
              <Typography variant="caption">Forgot password</Typography>
            </Button>
          </Card>
          <Card className={classes.signUpCard}>
            <Typography align="right" variant="body2">
              Don't have an account?
            </Typography>
            <Link to="/accounts/emailsignup">
              <Button className={classes.button} color="primary">
                SignUp
              </Button>
            </Link>
          </Card>
        </article>
      </section>
    </>
  );
}

export function LoginWithFacebook({ color, iconColor, variant }) {
  const classes = useLoginPageStyles();
  const icon = iconColor === "blue" ? FacebookIconBlue : FacebookIconWhite;
  return (
    <Button
      variant={variant}
      color={color}
      fullWidth
      className={classes.button}
    >
      <img src={icon} className={classes.facebookIcon} alt="facebook image" />
      Log In with Facebook
    </Button>
  );
}
export default LoginPage;
