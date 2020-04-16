import React from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import Home from "./Home";
import MapGenerator from "./MapGenerator";
import "./App.css";


const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/map">
        <MapGenerator/>
    </Route>
  </Switch>
);

export default App;
