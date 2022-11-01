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
    placeholder: "Select from list",
    register: {
      required: "This field is required",
    },
  },
  {
    type: "select",
    name: "service",
    label: "Service",
    options: serviceOptions,
    placeholder: "Select from list",
    register: {
      required: "This field is required",
    },
  },
  {
    type: "select",
    name: "masters",
    label: "Masters",
    options: mastersOptions,
    placeholder: "Select from list",
    register: {
      required: "Please, choose a master",
    },
  },
  {
    type: "text",
    name: "date",
    label: "Date",
    placeholder: "12.07.2022",
    register: {
      required: "Date is required",
      pattern: {
        value:
          /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/,
        message:
          "Invalid date. Format: DD/MM/YYYY. Between them is required a dot",
      },
    },
  },
  {
    type: "text",
    name: "timeFrom",
    label: "Time From",
    placeholder: "15:45",
    register: {
      required: "Please, choose a time",
      pattern: {
        value: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
        message:
          "Invalid time. Format: HH:MM. Between them is required a colon",
      },
    },
  },
  {
    type: "text",
    name: "timeTo",
    label: "Time To",
    placeholder: "17:00",
    register: {
      required: "Please, choose a time",
      pattern: {
        value: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
        message:
          "Invalid time. Format: HH:MM. Between them is required a colon",
      },
    },
  },
  {
    type: "number",
    name: "price",
    placeholder: "1234.50",
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
