import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrderPopUp = () => {
  const navigate = useNavigate();

  const popUpStyles = {
    background: "#ffffff",
    width: "500px",
    height: "300px",
    textAlign: "center",
    borderRadius: "20px",
    "& div": {
      position: "relative",
      top: "30%",
    },
    "& div:nth-of-type(1)": {
      top: "15%",
      color: "#5255C8",
      fontSize: "22px",
      textTransform: "capitalize",
    },
    "& div:nth-of-type(2)": {
      top: "30%",
    },
    "& button": {
      position: "relative",
      top: "50%",
      marginLeft: "10px",
      height: "40px",
      background: "#5255C8",
    },
    "& button:nth-of-type(1)": {
      background: "#ffffff",
    },
  };
  return (
    <Box component="div" sx={popUpStyles}>
      <div>Order #1234 successfully created</div>
      <div>What would you like to do next?</div>
      <Button variant="outlined" onClick={() => navigate("/")}>
        Go to home page
      </Button>
      <Button variant="contained" onClick={() => navigate("/order/1")}>
        Create new order
      </Button>
    </Box>
  );
};

export default OrderPopUp;
