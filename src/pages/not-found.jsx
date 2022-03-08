import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/shared/Layout";

function NotFoundPage() {
  return (
    <Layout
      marginTop={120}
      title="Page Not Found"
      minimalNavbar
      children={
        <>
          <Typography paragraph align="center" variant="h5">
            Sorry, this page isn't available
          </Typography>
          <Typography align="center">
            The link you followed may be broken, or the page may have been
            removed.{" "}
            <Link to="/">
              <Typography align="center" color="primary" component={"span"}>
                Go back to Instagram
              </Typography>
            </Link>
          </Typography>
        </>
      }
    />
  );
}

export default NotFoundPage;
