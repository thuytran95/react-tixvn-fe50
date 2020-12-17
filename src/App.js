import "./App.scss";
import Checkout from "./Screens/Checkout";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Login from "./Screens/Login";
import LayoutTheme from "./components/Layout";
import { routesHome } from "./routes";

function App(props) {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <LayoutTheme
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    <>
      <Switch>
        {showLayoutHome(routesHome)}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout:maLichChieu">
          <Checkout />
        </Route>
      </Switch>
    </>
  );
}

export default withRouter(App);
