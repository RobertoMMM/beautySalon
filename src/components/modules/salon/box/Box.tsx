import { Box } from "@mui/system";
import { FC } from "react";
interface BoxStructure {
  title: string;
  image: string;
}

const styledBox = {
  width: "120px",
  height: "150px",
  position: "relative",
  gap: "12px",
  "& img": {
    position: "relative",
    top: "0",
    left: "0",
    height: "120px",
    width: "100%",
  },
  "& .title": {
    position: "relative",
    top: "0",
    left: "0",
    width: "100%",
    height: "18px",
    fontSize: "19px",
    letterSpacing: "-0.02em",
    textDecorationLine: "underline",
    textDecorationThickness: "2px",
    textUnderlineOffset: "3px",
    color: "rgba(0, 0, 0, 0.96)",
    whiteSpace: "nowrap",
  },
};

const ItemBox: FC<BoxStructure> = ({ title, image }) => {
  return (
    <Box sx={styledBox}>
      <img src={image} />
      <span className="title">{title}</span>
    </Box>
  );
};

export default ItemBox;
