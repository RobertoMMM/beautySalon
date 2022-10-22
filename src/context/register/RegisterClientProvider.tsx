import { createContext, FC, ReactNode, useState } from "react";
import { Client } from "../../ts/interfaces";

export const RegisterClient = createContext({});

const initialClient = {
  name: "",
  phone: "",
  email: "",
  comments: "",
};

const RegisterClientProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [client, setClient] = useState<Client>(initialClient);

  const value = {
    client,
    setClient,
  };

  return (
    <RegisterClient.Provider value={value}>{children}</RegisterClient.Provider>
  );
};

export default RegisterClientProvider;
