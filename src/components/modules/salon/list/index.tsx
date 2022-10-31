import { FC } from "react";
import ItemBox from "../box/Box";
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
        {items.map(({ title, image }, index) => (
          <ItemBox key={index} title={title} image={image} />
        ))}
      </div>
    </>
  );
};

export default List;
