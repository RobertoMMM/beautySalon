import { FC, useEffect, useState } from "react";

interface LocalStorage {
  key: string;
  initialValue?: unknown;
}

const getSavedValue = ({ key, initialValue }: LocalStorage) => {
  if (!localStorage.getItem(key)) return initialValue;

  return JSON.parse(localStorage.getItem(key) as string);
};

const useLocalStorage = ({ key, initialValue }: LocalStorage) => {
  const [value, setValue] = useState(getSavedValue({ key, initialValue }));

  useEffect(() => {
    if (!value) return localStorage.setItem(key, "");

    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
