import React from "react";
import { useLayoutStyles } from "../../styles";
import Navbar from "./Navbar";
import SEO from "./Seo";

export const Layout = function({ children, title, marginTop = 60, minimalNavbar=false }) {
  const classes = useLayoutStyles();

  return (
    <section className={classes.section}>
      <SEO title={title} />
      <Navbar minimalNavbar={minimalNavbar} />
      <main style={{ marginTop }} className={classes.main}>
        <section className={classes.childrenWrapper}>
          <div className={classes.children}>{children}</div>
        </section>
      </main>
    </section>
  );
}

