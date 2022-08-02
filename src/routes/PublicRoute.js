import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = ({ children }) => {

  const { userLogged } = useSelector((state) => state.user);
  return Object.entries(userLogged).length < 0 ? <Navigate to="/" /> : children;
  
};

