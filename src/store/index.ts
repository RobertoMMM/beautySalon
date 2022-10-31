import { configureStore } from "@reduxjs/toolkit";
import authSlice from "store/slices/auth";
import registerServicesSlice from "store/slices/services";
import registerClientSlice from "store/slices/client";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    registerServicesInfo: registerServicesSlice,
    registerClientInfo: registerClientSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type { RootState };
