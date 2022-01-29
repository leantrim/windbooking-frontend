import React from "react";
import { Switch, Route } from "react-router";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <h1>Windbooking</h1>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
