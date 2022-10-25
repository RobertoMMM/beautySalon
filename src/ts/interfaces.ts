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
  onLogin: ({ email, password }: Login) => void;
  onLogout: () => void;
}

interface Client {
  name: string;
  phone: string;
  email: string;
  comments: string;
}
interface Service {
  serviceCategory: string;
  service: string;
  master: string;
  date: string;
  time: string;
  price: string;
  currency: string;
}

export type { Login, Authentication, OrderStepsPages, Client, Service };
