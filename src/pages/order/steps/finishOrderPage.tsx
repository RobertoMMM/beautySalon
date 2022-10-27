import { useNavigate } from "react-router-dom";
import arrowImage from "assets/dropdown.png";
import CustomButton from "components/modules/button";
import useRegisterClient from "hooks/useClientInformation";
import useRegisterService from "hooks/useService";
import { List, ListItem, Divider } from "@mui/material";

const FinishOrderPage = () => {
  const navigate = useNavigate();
  const { client } = useRegisterClient();
  const { service } = useRegisterService();

  const { comments, email, name, phone } = client;
  const { date, masters, price, serviceCategory, time, currency } = service;

  return (
    <form>
      <List>
        <ListItem>Service {serviceCategory?.label}</ListItem>
        <Divider />
        <ListItem>Master {masters?.label}</ListItem>
        <Divider />
        <ListItem>
          Date/Time {date} {time}
        </ListItem>
        <Divider />
        <ListItem>
          Price {price} {currency?.label}
        </ListItem>
        <Divider />
        <ListItem>Client name {name}</ListItem>
        <Divider />
        <ListItem>Client phone {phone}</ListItem>
        <Divider />
        <ListItem>Client email {email}</ListItem>
        <Divider />
        {comments && <ListItem>Comments {comments}</ListItem>}
      </List>
      <CustomButton onClick={() => navigate("/order/2")}>
        <img
          style={{ transform: "rotate(90deg)" }}
          src={arrowImage}
          alt="image"
        />
        Back
      </CustomButton>
      <CustomButton onClick={() => alert("button will do nothing")}>
        Create Order
      </CustomButton>
    </form>
  );
};

export default FinishOrderPage;
