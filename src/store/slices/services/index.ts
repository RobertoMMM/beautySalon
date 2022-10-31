import { Service } from "ts/interface";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState = {
  servicesInfo: {
    serviceCategory: "",
    service: "",
    masters: "",
    date: "",
    timeFrom: "",
    timeTo: "",
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
