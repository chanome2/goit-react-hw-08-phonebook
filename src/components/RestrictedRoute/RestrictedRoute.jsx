import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

/* if the route is restricted and the user is logged in, render a <Navigate></Navigate> to redirectTo, otherwise render the component  */

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};