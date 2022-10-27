import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";

const CustomButton = <T extends { children: ReactNode }>(props: T) => {
  const buttonStyles = {
    color: "#000000",
    borderRadius: "30px",
    bgcolor: "#FFFFFF",
    py: "10px",
    px: "15%",
    gap: "12.5px",
    fontSize: "15px",
    textTransform: "capitalize",
    "& img": {
      position: "relative",
      top: 0,
      left: 0,
      height: "17px",
      width: "17px",
    },
    left: "50%",
    transform: "translate(-50%)",
  };

  const boxStyles = {
    whiteSpace: "nowrap",
  };

  return (
    <Box component="span" sx={boxStyles}>
      <Button {...props} variant="contained" sx={buttonStyles}>
        {props.children}
      </Button>
    </Box>
  );
};

export default CustomButton;
