import { FC } from "react";
import { TOTAL_STEPS } from "constants/index";
import { Box } from "@mui/material";

const NewOrderHeader: FC<{ idStep: number; description: string }> = ({
  idStep,
  description,
}) => {
  const stepText = `Step ${idStep}/${TOTAL_STEPS} - ${description}`;

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
