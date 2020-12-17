import React from "react";
import { Route } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default function LayoutTheme({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <Layout>
          <Component {...propsComponent} />
        </Layout>
      )}
    />
  );
}
