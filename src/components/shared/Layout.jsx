import React from "react";
import { useLayoutStyles } from "../../styles";
import Navbar from "./Navbar";
import SEO from "./Seo";

function Layout({ children, title, marginTop = 60 }) {
  const classes = useLayoutStyles();

  return (
    <section className={classes.section}>
      <SEO title={title} />
      <Navbar />
      <main style={{ marginTop }} className={classes.main}>
        <section className={classes.childrenWrapper}>
          <div className={classes.children}>{children}</div>
        </section>
      </main>
    </section>
  );
}

export default Layout;