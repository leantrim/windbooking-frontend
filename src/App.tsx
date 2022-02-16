import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import "./styles/App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Windfarms from "./components/Windparks";
import Login from "./components/Login";
import NewWindfarm from "./components/NewWindfarm";

export default function App() {
  return (
    <div>
      <NavBar />
      {/* <h1>Windbooking</h1> */}
      <Switch>
        <Route path="/windfarm/:id" component={NewWindfarm} />
        <Route path="/home" component={Home} />
        <Route path="/windfarms" component={Windfarms} />
        <Route path="/login" component={Login} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    </div>
  );
}
