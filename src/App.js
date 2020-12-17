import "./App.scss";
import Home from "./Screens/Home";
import MovieDetail from "./Screens/MovieDetail";
import Checkout from "./Screens/Checkout";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Screens/Login";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/movie-detail/:id">
              <MovieDetail />
            </Route>
          </Layout>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout:maLichChieu">
            <Checkout />
          </Route>
          <Route path="/home">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
