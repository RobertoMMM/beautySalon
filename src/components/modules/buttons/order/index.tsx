import { ReactNode } from "react";
import style from "./button.module.css";

const CustomOrderButton = <T extends { children: ReactNode }>(props: T) => {
  return (
    <button className={style.customButton} {...props}>
      {props.children}
    </button>
  );
};

export default CustomOrderButton;
