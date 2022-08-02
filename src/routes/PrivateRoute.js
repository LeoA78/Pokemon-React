import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {

  const { userLogged } = useSelector((state) => state.user);
  console.log('Este es el logueado: ', userLogged);

  return Object.entries(userLogged).length > 0 ? children : <Navigate to="/" />;

};
