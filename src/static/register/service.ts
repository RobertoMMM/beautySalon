const serviceCategoryOptions = [
  {
    value: "ServiceCategory#1",
    text: "ServiceCategory#1",
  },
  {
    value: "ServiceCategory#2",
    text: "ServiceCategory#2",
  },
  {
    value: "ServiceCategory#3",
    text: "ServiceCategory#3",
  },
];

const serviceOptions = [
  {
    value: "Service#1",
    text: "Service#1",
  },
  {
    value: "Service#2",
    text: "Service#2",
  },
  {
    value: "Service#3",
    text: "Service#3",
  },
];

const mastersOptions = [
  {
    value: "Service#1",
    text: "Service#1",
  },
  {
    value: "Service#2",
    text: "Service#2",
  },
  {
    value: "Service#3",
    text: "Service#3",
  },
];

const timeOptions = [
  {
    value: "9:45",
    text: "9:45",
  },
  {
    value: "10:45",
    text: "10:45",
  },
  {
    value: "11:45",
    text: "11:45",
  },
];

const currencyOptions = [
  {
    value: "MDL",
    text: "MDL",
  },
  {
    value: "EUR",
    text: "EUR",
  },
  {
    value: "USD",
    text: "USD",
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
    type: "select",
    name: "time",
    label: "Time",
    options: timeOptions,
    register: {
      required: "Please, choose a time",
    },
  },
  {
    type: "number",
    name: "price",
    label: "Price",
    placeholder: "Ex: 1000$",
    register: {
      required: "Price is required",
      min: 1,
      minLength: {
        value: 1,
        message: "Invalid Price",
      },
    },
  },
  {
    type: "select",
    name: "currency",
    label: "",
    options: currencyOptions,
    register: {
      required: "Please, choose currency",
    },
  },
];
export default formModel;
