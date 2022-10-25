import { createContext, FC, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { AUTH_KEY } from "../ts/enums";
import { Authentication, Login } from "../ts/interfaces";

export const AuthContext = createContext<Authentication>({
  token: null,
  onLogout: () => {},
  onLogin: () => {},
});

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useLocalStorage({ key: AUTH_KEY });

  const onLogin = ({ userName, password }: Login) => {
    // TODO. AUTHENTICATION LOGIC
    if (!(userName && password)) return;

    // if authentication ... set token
    setToken(Math.random());

    const origin = location.state?.from?.pathname || "/home";

    navigate(origin);
  };

  const onLogout = () => {
    setToken(null);
  };

  const value: Authentication = {
    token,
    onLogin,
    onLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
