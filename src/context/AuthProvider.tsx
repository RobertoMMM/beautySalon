import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, createContext, FC, ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { Authentication, Login } from "ts/interfaces";
import { Token } from "ts/types";

export const AuthContext = createContext<Authentication>({} as Authentication);

const createNewAccount = async ({ email, password }: Login) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const userToken = await user.getIdToken();

  return userToken;
};

const signIn = async ({ email, password }: Login) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  const userToken = await user.getIdToken();

  return userToken;
};

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState<Token>("");

  const [pending, setPending] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();

        setToken(token);
      }
      setPending(false);
    });
  }, []);

  const onLogin = async ({ email, password }: Login) => {
    if (!(email && password)) return;

    try {
      setToken(await signIn({ email, password }));
    } catch (e) {
      setToken(await createNewAccount({ email, password }));
    }

    const origin = location.state?.from?.pathname || "/home";

    navigate(origin);
  };

  const onLogout = async () => {
    try {
      await signOut(auth);
      setToken(null);
    } catch (error: any) {
      alert(error);
    }
  };

  const value: Authentication = { token, setToken, onLogin, onLogout };

  return (
    <AuthContext.Provider value={value}>
      {pending ? <>Loading...</> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
