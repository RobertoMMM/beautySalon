import { configureStore } from "@reduxjs/toolkit";
import authReducer from "store/slices/auth";
import registerServicesReducer from "store/slices/services";
import registerClientInfo from "store/slices/client";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    registerServicesInfo: registerServicesReducer,
    registerClientInfo: registerClientInfo,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type { RootState };
