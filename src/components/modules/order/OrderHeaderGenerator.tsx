import { FC } from "react";
import { Box } from "@mui/material";

const TOTAL_STEPS = 3;

const boxStyles = {
  display: "flex",
  position: "relative",
  alignItems: "center",
  top: "86px",
  left: "89px",
  gap: 2,
};

const titleStyles = {
  color: "#5255c8",
  fontSize: "48px",
};

const stepTextStyles = {
  bgcolor: "#eefd77",
  width: "auto",
  py: "8px",
  px: "12px",
  fontSize: "24px",
  borderRadius: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const NewOrderHeader: FC<{ id: number; description: string }> = ({
  id,
  description,
}) => {
  const stepText = `Step ${id}/${TOTAL_STEPS} - ${description}`;

  return (
    <Box component="span" sx={boxStyles}>
      <Box component="span" sx={titleStyles}>
        Register new order
      </Box>
      <Box component="span" sx={stepTextStyles}>
        {stepText}
      </Box>
    </Box>
  );
};

export default NewOrderHeader;
