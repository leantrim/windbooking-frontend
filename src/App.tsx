import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import "./styles/App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NewWindfarm from "./components/NewWindfarm";
import WindFarm from "./components/WindFarm";
import Login from "./components/Login";
import Logout from "./components/Logout";

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/windfarm/:id" component={NewWindfarm} />
        <Route path="/windfarm" component={WindFarm} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    </div>
  );
}
