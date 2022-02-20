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
import ProtectedRoute from "./components/common/ProtectedRoute";

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
        <ProtectedRoute path="/windfarm" component={WindFarm} />
        <Route path="/login" component={Login} />
        <Route
          path="/profile"
          render={(props) => <Profile user={user} {...props} />}
        />
        <Route path="/logout" component={Logout} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    </div>
  );
}
export default App;
