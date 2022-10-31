class LocalStorage {
  static get = (name: string) => {
    if (localStorage.getItem(name)) {
      return JSON.parse(localStorage.getItem(name) as string);
    }
  };

  static set = (name: string, data: unknown) => {
    data && localStorage.setItem(name, JSON.stringify(data));
  };

  static clear = () => {
    localStorage.clear();
  };
}

export { LocalStorage };
