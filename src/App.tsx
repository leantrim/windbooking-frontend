import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Windparks from "./components/Windparks";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <NavBar />
      <h1>Windbooking</h1>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/windparks" component={Windparks} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
