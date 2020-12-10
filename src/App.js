import "./App.scss";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./Screens/Checkout";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Checkout />
    </>
  );
}

export default App;
