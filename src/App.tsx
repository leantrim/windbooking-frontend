import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import "./styles/App.css";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/Signup" component={Signup} />
      </Switch>
    </div>
  );
}
