import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";

export default function App() {
  return (
    <div>
      <h1>Windbooking</h1>
      <Switch>
        <Route path="/Signup" component={Signup} />
      </Switch>
    </div>
  );
}
