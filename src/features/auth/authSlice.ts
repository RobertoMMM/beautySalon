import { Login } from "ts/interfaces";
import { Token } from "ts/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { createNewAccount, signIn } from "./helpers";
import { clearUserDataCookie } from "utils/cookie";

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

const onLogin = createAsyncThunk(
  "auth/signOrCreateUser",
  async ({ email, password, username }: Login) => {
    try {
      const { userToken: token, userEmail } = await signIn({
        email,
        password,
        username,
      });

      return { email: userEmail, password, token, username };
    } catch (e) {
      console.log(e);
      const { userToken: token, userEmail } = await createNewAccount({
        email,
        password,
        username,
      });

      return { email: userEmail, password, token, username };
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
      state.username = payload;
    },
    setUserEmail(state, { payload }: { payload: string }) {
      state.email = payload;
    },
    onLogout(state) {
      clearUserDataCookie();

      state.token = "";
      state.email = "";
      state.password = "";
      state.username = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      onLogin.fulfilled,
      (state, { payload }: { payload: Authentication }) => {
        state.token = payload.token;
        state.email = payload.email;
        state.password = payload.password;
        state.username = payload.username;
      }
    );
  },
});

export const { setToken, onLogout, setUserName, setUserEmail } =
  authSlice.actions;

export const getUserToken = ({ auth }: RootState) => auth.token;
export const getUserEmail = ({ auth }: RootState) => auth.email;
export const getUserName = ({ auth }: RootState) => auth.username;

export { onLogin };

export default authSlice.reducer;
