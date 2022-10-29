import { Service } from "ts/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const initialState = {
  servicesInfo: {
    serviceCategory: "",
    service: "",
    masters: "",
    date: "",
    time: "",
    price: "",
    currency: "",
  } as Service,
};

const registerServicesSlice = createSlice({
  name: "registerServices",
  initialState,
  reducers: {
    setServicesInfo(state, { payload }: { payload: Service }) {
      state.servicesInfo = payload;
    },
  },
});

export const { setServicesInfo } = registerServicesSlice.actions;

export const getRegisterServicesInfo = ({ registerServicesInfo }: RootState) =>
  registerServicesInfo.servicesInfo;

export default registerServicesSlice.reducer;