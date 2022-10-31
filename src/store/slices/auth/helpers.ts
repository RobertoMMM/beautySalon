import { saveCookie } from "utils/cookie";
import { COOKIE_USER_DATA, SERVER_URL } from "constants/index";
import { Login } from "ts/interfaces";
import { HTTP } from "utils/api";

const createNewAccount = async ({ email, password, username }: Login) => {
  const URL = `${SERVER_URL}/api/auth/local/register`;

  const { user, jwt } = await HTTP.post(URL, {
    username,
    password,
    email,
  });

  const userEmail = user.email;
  const userToken = jwt;

  saveCookie(COOKIE_USER_DATA, {
    token: jwt,
    email: userEmail,
    username,
  });

  return { userToken, userEmail };
};

const signIn = async ({ username, password }: Login) => {
  const URL = `${SERVER_URL}/api/auth/local`;

  const { user, jwt } = await HTTP.post(URL, {
    identifier: username,
    password,
  });

  const userEmail = user.email;
  const userToken = jwt;

  saveCookie(COOKIE_USER_DATA, {
    token: jwt,
    email: userEmail,
    username,
  });

  return { userToken, userEmail };
};

export { createNewAccount, signIn };
