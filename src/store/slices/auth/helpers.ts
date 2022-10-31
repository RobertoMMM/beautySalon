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
  const userToken = jwt;

  saveCookie("userToken", {
    token: jwt,
    email: userEmail,
    username,
  });

  return { userToken, userEmail };
};

const signIn = async ({ username, password }: Login) => {
  const URL = `${API}/api/auth/local`;

  const { user, jwt } = await HTTP.post(URL, {
    identifier: username,
    password,
  });

  const userEmail = user.email;
  const userToken = jwt;

  saveCookie("userToken", {
    token: jwt,
    email: userEmail,
    username,
  });

  return { userToken, userEmail };
};

export { createNewAccount, signIn };
