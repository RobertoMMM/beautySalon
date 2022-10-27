import { ReactElement } from "react";
import { Token } from "./types";

interface Login {
  email: string;
  password: string;
}

interface OrderStepsPages {
  idStep: number;
  description: string;
  content: ReactElement;
}

interface Authentication {
  token: Token;
  setToken: (newToken: string) => void;
  onLogin: ({ email, password }: Login) => void;
  onLogout: () => void;
}

interface Client {
  name: string;
  phone: string;
  email: string;
  comments: string;
}

interface SelectInput {
  label: string;
  value: string;
}
interface Service {
  serviceCategory: SelectInput;
  service: SelectInput;
  masters: SelectInput;
  date: string;
  time: string;
  price: string;
  currency: SelectInput;
}

interface ClientInformation {
  name: string;
  phone: string;
  email: string;
  comments: string;
}

export type {
  Login,
  Authentication,
  OrderStepsPages,
  Client,
  Service,
  ClientInformation,
};
