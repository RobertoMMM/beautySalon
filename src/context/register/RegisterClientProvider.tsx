import { createContext, FC, ReactNode, useState } from "react";
import { Client } from "ts/interfaces";

const initialClient = {
  name: "",
  phone: "",
  email: "",
  comments: "",
};

export const RegisterClient = createContext({
  client: initialClient,
  setClient: (newClient: Client) => {},
});

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
