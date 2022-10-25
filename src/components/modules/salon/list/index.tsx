import { FC } from "react";
import Box from "../box/Box";
import "./list.css";

interface ListItems {
  title: string;
  image: string;
}

const List: FC<{ items: ListItems[]; title: string }> = ({ items, title }) => {
  return (
    <>
      <div className="listTitle">{title}</div>
      <div className="list">
        {items.map((box, index) => (
          <Box key={index} title={box.title} image={box.image} />
        ))}
      </div>
    </>
  );
};

export default List;
