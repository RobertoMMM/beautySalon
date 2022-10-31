export const loginForm = [
  {
    type: "text",
    name: "username",
    label: "User Name",
    placeholder: "bobby#123",
    register: {
      required: "Username is required",
      pattern: {
        value: /^[a-z0-9_-]{3,15}.{10,}$/,
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
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "Secret key",
    register: {
      required: "Password is required",
      pattern: {
        value:
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      },
    },
  },
];
