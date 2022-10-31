import { FC } from "react";
import "./box.css";

interface BoxStructure {
  title: string;
  image: string;
}

const ItemBox: FC<BoxStructure> = ({ title, image }) => {
  return (
    <div className="box">
      <img src={image} />
      <span className="title">{title}</span>
    </div>
  );
};

export default ItemBox;
