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
        message:
          "Make sure username length is more than 13 characters and it contains only letters and numbers",
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
        message: "Invalid email",
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
        message:
          "Password should contain numbers, letters(including uppercase), and special symbols",
      },
    },
  },
];
