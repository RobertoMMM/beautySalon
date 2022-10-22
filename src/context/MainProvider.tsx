import { ReactNode } from "react";
import AuthProvider from "./AuthProvider";
import RegisterClientProvider from "./register/RegisterClientProvider";
import RegisterServicesProvider from "./register/RegisterServiceProvider";

const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <RegisterServicesProvider>
        <RegisterClientProvider>{children}</RegisterClientProvider>
      </RegisterServicesProvider>
    </AuthProvider>
  );
};

export default MainProvider;
