import { Box } from "@mui/material";
import CustomButton from "components/common/button";
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };

  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  };

  return (
    <Box sx={styles}>
      <Box>NoMatch</Box>
      <br />
      <CustomButton onClick={redirect}>Go Home</CustomButton>
    </Box>
  );
};

export default NoMatch;
