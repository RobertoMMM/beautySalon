import { Navigate } from "react-router-dom";
import useAuth from "hooks/useAuth";

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/home" replace={true} />;
  }

  return element;
};

export default ProtectedRoute;
