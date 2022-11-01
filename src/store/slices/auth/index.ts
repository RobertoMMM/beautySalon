import { Token } from "ts/type";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { clearCookie } from "utils/cookie";

interface Authentication {
  token: Token;
  email: string;
  password: string;
  username: string;
}

const initialState: Authentication = {
  token: "",
  email: "",
  password: "",
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, { payload }: { payload: Token }) {
      state.token = payload;
    },
    setUserName(state, { payload }: { payload: string }) {
      state.username = payload;
    },
    setUserEmail(state, { payload }: { payload: string }) {
      state.email = payload;
    },
    onLogin(
      state,
      {
        payload: { email, token, password, username },
      }: { payload: Authentication }
    ) {
      state.token = token;
      state.email = email;
      state.password = password;
      state.username = username;
    },
    onLogout(state) {
      clearCookie("");

      state.token = "";
      state.email = "";
      state.password = "";
      state.username = "";
    },
  },
});

export const { setToken, onLogout, onLogin, setUserName, setUserEmail } =
  authSlice.actions;

export const getUserToken = ({ auth }: RootState) => auth.token;
export const getUserEmail = ({ auth }: RootState) => auth.email;
export const getUserName = ({ auth }: RootState) => auth.username;

export default authSlice.reducer;
