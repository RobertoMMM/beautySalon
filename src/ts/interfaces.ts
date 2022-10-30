import { ReactElement } from "react";

interface Login {
  email: string;
  password: string;
  username: string;
}

interface OrderStepsPages {
  idStep: number;
  description: string;
  content: ReactElement;
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
  masters: string;
  date: string;
  time: string;
  price: string;
  currency: string;
}

interface ClientInformation {
  name: string;
  phone: string;
  email: string;
  comments: string;
}

export type { Login, OrderStepsPages, Client, Service, ClientInformation };
