import "./App.scss";
import Home from "./Screens/Home";
import MovieDetail from "./Screens/MovieDetail";
import Checkout from "./Screens/Checkout";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Screens/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/movie-detail/:id">
            <MovieDetail />
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
