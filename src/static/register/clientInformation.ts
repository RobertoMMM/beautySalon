export const clientForm = [
  {
    type: "text",
    name: "name",
    label: "Name",
    placeholder: "Bobby",
    register: {
      required: "Name is required",
    },
  },
  {
    type: "text",
    name: "phone",
    label: "Phone",
    placeholder: "+373(_________)",
    register: {
      required: "Phone is required",
      pattern: {
        value: /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/,
      },
    },
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "bobby@gmail.com",
    register: {
      required: "Email is required",
      pattern: {
        value: /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/,
      },
    },
  },
  {
    type: "textarea",
    name: "comments",
    label: "Comments",
    placeholder: "Add some comments here. This field is optional",
    register: {
      required: false,
    },
  },
];
