import { ReactElement } from "react";

interface Login {
  userName: string;
  password: string;
}

interface OrderStepsPages {
  idStep: number;
  description: string;
  content: ReactElement;
}

interface Authentication {
  token: string | number | null;
  onLogin: ({ userName, password }: Login) => void;
  onLogout: ({ userName, password }: Login) => void;
}

interface Client {
  name: string;
  phone: string;
  email: string;
  comments: string;
}

interface ServicePrice {
  amount: number;
  currency: string;
}

interface ServiceTime {
  date: string;
  time: string;
}

interface Service {
  serviceCategory: string;
  service: string;
  master: string;
  time: ServiceTime;
  price: ServicePrice;
}

export type { Login, Authentication, OrderStepsPages, Client, Service };
