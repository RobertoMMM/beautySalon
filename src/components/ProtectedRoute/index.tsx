import { ReactElement } from "react";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const { token } = useAuth();
  console.log(token);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/home" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
