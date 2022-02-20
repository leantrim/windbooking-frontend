import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import "./styles/App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import WindFarm from "./components/WindFarm";
import Login from "./components/Login";
import Profile from "./components/profile/Profile";
import { useEffect, useState } from "react";
import auth from "./services/authService";
import Logout from "./components/Logout";
import TechTable from "./components/TechTable";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser(auth.getCurrentUser());
  }, []);

  return (
    <div>
      <NavBar />

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/windfarm" component={WindFarm} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/logout" component={Logout} />
        <Route path="/Signup" component={Signup} />
        <Route path="/TechTable" component={TechTable} />
      </Switch>
    </div>
  );
}
export default App;
