import { createContext, FC, ReactNode, useState } from "react";
import { Service } from "../../ts/interfaces";

export const RegisterServices = createContext({
  service: {},
  setService: (service: Service) => {},
});

const RegisterServicesProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [service, setService] = useState<Service>({} as Service);

  const value = {
    service,
    setService,
  };

  return (
    <RegisterServices.Provider value={value}>
      {children}
    </RegisterServices.Provider>
  );
};

export default RegisterServicesProvider;
