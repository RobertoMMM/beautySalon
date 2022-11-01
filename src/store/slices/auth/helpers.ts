import { saveCookie } from "utils/cookie";
import { Login } from "ts/interface";
import { HTTP } from "utils/api";
import { API } from "constants/index";

const createNewAccount = async ({ email, password, username }: Login) => {
  const URL = `${API}/api/auth/local/register`;

  const { user, jwt } = await HTTP.post(URL, {
    username,
    password,
    email,
  });

  const userEmail = user.email;
  const token = jwt;

  saveCookie("userToken", {
    token,
    email: userEmail,
    username,
  });

  return { token };
};

const login = async ({ email, username, password }: Login) => {
  const URL = `${API}/api/auth/local`;

  const { jwt } = await HTTP.post(URL, {
    identifier: username,
    password,
  });
  const token = jwt;

  saveCookie("userToken", {
    token,
    email,
    username,
  });

  return { token };
};

export { createNewAccount, login };
