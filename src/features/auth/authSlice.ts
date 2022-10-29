import { Login } from "ts/interfaces";
import { Token } from "ts/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebaseConfig";

interface Authentication {
  token: Token;
  email: string;
  password: string;
  userName: string;
}

const initialState: Authentication = {
  token: "",
  email: "",
  password: "",
  userName: "",
};

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

const onLogin = createAsyncThunk(
  "auth/signOrCreateUser",
  async ({ email, password, userName }: Login) => {
    try {
      const token: Token = await signIn({ email, password, userName });

      return { email, password, token, userName };
    } catch (e) {
      const token: Token = await createNewAccount({
        email,
        password,
        userName,
      });

      return { email, password, token, userName };
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, { payload }: { payload: Token }) {
      state.token = payload;
    },
    setUserName(state, { payload }: { payload: string }) {
      state.userName = payload;
    },
    onLogout(state) {
      signOut(auth);
      state.token = "";
      state.email = "";
      state.password = "";
      state.userName = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      onLogin.fulfilled,
      (state, { payload }: { payload: Authentication }) => {
        state.token = payload.token;
        state.email = payload.email;
        state.password = payload.password;
        state.userName = payload.userName;
      }
    );
  },
});

export const { setToken, onLogout, setUserName } = authSlice.actions;

export const getUserToken = ({ auth }: RootState) => auth.token;
export const getUserEmail = ({ auth }: RootState) => auth.email;
export const getUserName = ({ auth }: RootState) => auth.userName;

export { onLogin };

export default authSlice.reducer;
