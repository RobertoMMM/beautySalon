import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";

const StyledButton = styled(Button)(() => ({
  color: "#000000",
  borderRadius: "30px",
  backgroundColor: "#FFFFFF",
  padding: "10px 15%",
  gap: "12.5px",
  textTransform: "capitalize",
  left: "50%",
  transform: "translate(-50%)",
  ":hover": {
    backgroundColor: "#FFFFFF",
  },
  "& img": {
    position: "relative",
    top: 0,
    left: 0,
    height: "17px",
    width: "17px",
  },
}));

const CustomButton = <T extends { children: ReactNode }>(props: T) => {
  const boxStyles = {
    whiteSpace: "nowrap",
  };

  return (
    <Box component="div" sx={boxStyles}>
      <StyledButton sx={{ fontSize: "24px" }} {...props} variant="contained" />
    </Box>
  );
};

export default CustomButton;
