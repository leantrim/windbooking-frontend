import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import "./styles/App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Windparks from "./components/Windparks";
import Login from "./components/Login";
import newWindfarm from "./components/NewWindfarm";

export default function App() {
  return (
    <div>
      <NavBar />
      {/* <h1>Windbooking</h1> */}
      <Switch>
        <Route path="/windparks/new" component={newWindfarm} />
        <Route path="/home" component={Home} />
        <Route path="/windparks" component={Windparks} />
        <Route path="/login" component={Login} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    </div>
  );
}
