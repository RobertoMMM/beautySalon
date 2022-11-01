import { Box } from "@mui/system";
import { FC } from "react";
import ItemBox from "../box/Box";
interface ListItems {
  title: string;
  image: string;
}

const styledBox = {
  width: "100px",
  height: "30px",
  fontSize: "30px",
  lineHeight: "30px",
  fontWeight: 600,
  letterSpacing: "-0.03em",
  color: "rgba(0, 0, 0, 0.96)",
};

const styledList = {
  position: "relative",
  top: "48px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 120px)",
  rowGap: "48px",
  columnGap: "103px",
  width: "100%",
};

const List: FC<{ items: ListItems[]; title: string }> = ({ items, title }) => {
  return (
    <>
      <Box sx={styledBox}>{title}</Box>
      <Box sx={styledList}>
        {items.map(({ title, image }, index) => (
          <ItemBox key={index} title={title} image={image} />
        ))}
      </Box>
    </>
  );
};

export default List;
