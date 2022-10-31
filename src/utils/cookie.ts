import Cookies from "js-cookie";

const saveCookie = (name: string, newValue: any) => {
  newValue && Cookies.set(name, JSON.stringify(newValue));
};

const getCookie = (name: string) => {
  return Cookies.get(name) || null;
};

const clearCookie = (name: string) => {
  return Cookies.remove(name);
};

export { saveCookie, getCookie, clearCookie };
