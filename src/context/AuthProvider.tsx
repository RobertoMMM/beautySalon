import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, FC, ReactNode, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { Authentication, Login } from "../ts/interfaces";
import { Token } from "../ts/types";

export const AuthContext = createContext<Authentication>({
  token: null,
  onLogout: () => {},
  onLogin: () => {},
});

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState<Token>(null);

  const createNewAccount = async ({ email, password }: Login) => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userToken = await user.getIdToken();

    setToken(userToken);
  };

  const signIn = async ({ email, password }: Login) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const userToken = await user.getIdToken();

    setToken(userToken);
  };

  const onLogin = async ({ email, password }: Login) => {
    if (!(email && password)) return;

    try {
      await signIn({ email, password });
    } catch (e) {
      await createNewAccount({ email, password });
    }

    const origin = location.state?.from?.pathname || "/home";

    navigate(origin);
  };

  // bobby1@gmail.com
  const onLogout = async () => {
    try {
      await signOut(auth);
      setToken(null);
    } catch (error: any) {
      alert(error);
    }
  };

  const value: Authentication = { token, onLogin, onLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
