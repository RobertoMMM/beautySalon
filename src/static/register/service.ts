const serviceCategoryOptions = [
  {
    value: "ServiceCategory#1",
    label: "ServiceCategory#1",
  },
  {
    value: "ServiceCategory#2",
    label: "ServiceCategory#2",
  },
  {
    value: "ServiceCategory#3",
    label: "ServiceCategory#3",
  },
];

const serviceOptions = [
  {
    value: "Service#1",
    label: "Service#1",
  },
  {
    value: "Service#2",
    label: "Service#2",
  },
  {
    value: "Service#3",
    label: "Service#3",
  },
];

const mastersOptions = [
  {
    value: "Service#1",
    label: "Service#1",
  },
  {
    value: "Service#2",
    label: "Service#2",
  },
  {
    value: "Service#3",
    label: "Service#3",
  },
];

const currencyOptions = [
  {
    value: "MDL",
    label: "MDL",
  },
  {
    value: "EUR",
    label: "EUR",
  },
  {
    value: "USD",
    label: "USD",
  },
];

const formModel = [
  {
    type: "select",
    name: "serviceCategory",
    label: "Service Category",
    options: serviceCategoryOptions,
    register: {
      required: "This field is required",
    },
  },
  {
    type: "select",
    name: "service",
    label: "Service",
    options: serviceOptions,
    register: {
      required: "This field is required",
    },
  },
  {
    type: "select",
    name: "masters",
    label: "Masters",
    options: mastersOptions,
    register: {
      required: "Please, choose a master",
    },
  },
  {
    type: "date",
    name: "date",
    label: "Date",
    register: {
      required: "Date is required",
    },
  },
  {
    type: "time",
    name: "time",
    label: "Time",
    register: {
      required: "Please, choose a time",
    },
  },
  {
    type: "number",
    name: "price",
    label: "Price",
    register: {
      required: "Price is required",
    },
  },
  {
    type: "select",
    name: "currency",
    label: "Currency",
    options: currencyOptions,
    register: {
      required: "Please, choose currency",
    },
  },
];
export default formModel;
