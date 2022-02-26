import { Route, Switch, Redirect } from "react-router-dom";
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
import ProtectedRoute from "./components/common/ProtectedRoute";
import NewWindfarm from "./components/NewWindfarm";

function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser(auth.getCurrentUser());
  }, []);

  return (
    <div>
      <NavBar user={user} />

      <Switch>
        <Route path="/home" component={Home} />
        <ProtectedRoute path="/windFarm/:id" component={NewWindfarm} />
        <ProtectedRoute path="/windfarm" component={WindFarm} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/logout" component={Logout} />
        <Route path="/Signup" component={Signup} />
        <Redirect from="/" exact to="/home" />
      </Switch>
    </div>
  );
}
export default App;
