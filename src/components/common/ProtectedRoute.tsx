import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";
import ProtectedRouteType from "../../types/ProtectedRouteType";

function ProtectedRoute({
  component: Component,
  render,
  ...restProps
}: ProtectedRouteType) {
  return (
    <Route
      {...restProps}
      render={(props) => {
        if (!auth.getCurrentUser()) return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
}

export default ProtectedRoute;
