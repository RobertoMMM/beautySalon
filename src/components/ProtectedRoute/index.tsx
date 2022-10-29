import { useAppSelector } from "app/store";
import { getUserToken } from "features/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const token = useAppSelector(getUserToken);

  if (!token) {
    alert("Please login first");
    return <Navigate to="/" replace={true} />;
  }

  return element;
};

export default ProtectedRoute;
