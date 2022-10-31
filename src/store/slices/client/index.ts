import { Client } from "ts/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialClient: Client = {
  name: "",
  phone: "",
  email: "",
  comments: "",
};

const initialState = {
  clientInfo: initialClient,
};

const registerClientSlice = createSlice({
  name: "registerServices",
  initialState,
  reducers: {
    setClientInfo(state, { payload }: { payload: Client }) {
      state.clientInfo = payload;
    },
  },
});

export const { setClientInfo } = registerClientSlice.actions;

export const getRegisterClientInfo = ({ registerClientInfo }: RootState) =>
  registerClientInfo.clientInfo;

export default registerClientSlice.reducer;
