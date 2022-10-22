import { Navigate } from "react-router-dom";

const Redirect = ({ to }: { to: string }) => {
  return <Navigate replace to={`/${to}`} />;
};

export default Redirect;
