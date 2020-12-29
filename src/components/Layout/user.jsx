import React from "react";
import { Route } from "react-router-dom";
import UserInfomation from "../UserInformation";
import Footer from "../Footer";
import Header from "../Header";
function Layout(props) {
  return (
    <>
      <Header />
      <div className="row">
        <div  className="col-2 px-0">
          <UserInfomation />
        </div>
        <div className="col-10 px-0">
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function LayoutUserTheme({ Component, ...props }) {
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
