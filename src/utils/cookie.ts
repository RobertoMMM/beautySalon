import { COOKIE_USER_DATA } from "constants/index";
import Cookies from "js-cookie";

const saveCookie = (name: string, newValue: any) => {
  newValue && Cookies.set(name, JSON.stringify(newValue));
};

const getCookie = (name: string) => {
  return Cookies.get(name) || null;
};

const clearUserDataCookie = () => {
  return Cookies.remove(COOKIE_USER_DATA);
};

export { saveCookie, getCookie, clearUserDataCookie };
