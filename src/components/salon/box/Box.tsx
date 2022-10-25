import { FC } from "react";
import "./box.css";

interface Box {
  title: string;
  image: string;
}

const Box: FC<Box> = ({ title, image }) => {
  return (
    <div className="box">
      <img src={image} />
      <span className="title">{title}</span>
    </div>
  );
};

export default Box;
