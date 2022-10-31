interface Login {
  email: string;
  password: string;
  username: string;
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
  timeFrom: string;
  timeTo: string;
  price: string;
  currency: string;
}

interface ClientInformation {
  name: string;
  phone: string;
  email: string;
  comments: string;
}

export type { Login, Client, Service, ClientInformation };
