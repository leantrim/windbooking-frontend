import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import "./styles/App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Windparks from "./components/Windparks";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import auth from "./services/authService";

<<<<<<< HEAD
function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser(auth.getCurrentUser());
  }, []);

=======
export default function App() {
>>>>>>> origin/dev
  return (
    <div>
      <NavBar />
      <h1>Windbooking</h1>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/windparks" component={Windparks} />
        <Route path="/login" component={Login} />
<<<<<<< HEAD
        <Route
          path="/profile"
          render={(props) => <Profile user={user} {...props} />}
        />
=======
        <Route path="/Signup" component={Signup} />
>>>>>>> origin/dev
      </Switch>
    </div>
  );
}
