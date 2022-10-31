import { useNavigate } from "react-router-dom";
import arrowImage from "assets/dropdown.png";
import CustomButton from "components/modules/button";
import { List, ListItem } from "@mui/material";
import { useAppSelector } from "store";
import { getRegisterClientInfo } from "store/slices/client";
import { getRegisterServicesInfo } from "store/slices/services";
import OrderPopUp from "components/modules/popUp/order";
import { useState } from "react";
import { saveCookie } from "utils/cookie";
import { COOKIE_USER_ORDER } from "constants/index";

const FinishOrderPage = () => {
  const [isPopActive, setIsPopUpActive] = useState(false);
  const navigate = useNavigate();
  const client = useAppSelector(getRegisterClientInfo);
  const services = useAppSelector(getRegisterServicesInfo);

  const { comments, email, name, phone } = client;
  const { date, masters, price, serviceCategory, timeTo, timeFrom, currency } =
    services;

  saveCookie(COOKIE_USER_ORDER, {
    comments,
    email,
    name,
    phone,
    date,
    masters,
    price,
    serviceCategory,
    timeFrom,
    timeTo,
    currency,
  });

  const listStyles = {
    width: "579px",
  };

  const listItemsStyles = {
    marginBottom: "50px",
    display: "flex",
    justifyContent: "space-between",
    "& div": {
      fontSize: "23px",
      fontWeight: "bold",
    },
    "& span": {
      fontSize: "25px",
      whiteSpace: "nowrap",
    },
  };

  return (
    <form>
      {isPopActive ? (
        <OrderPopUp />
      ) : (
        <List sx={listStyles}>
          <ListItem sx={listItemsStyles}>
            <div>Service</div> <span>{serviceCategory}</span>
          </ListItem>
          <ListItem sx={listItemsStyles}>
            <div>Master</div> <span>{masters}</span>
          </ListItem>
          <ListItem sx={listItemsStyles}>
            <div>Date/Time</div>
            <span>
              {date} {timeFrom} - {timeTo}
            </span>
          </ListItem>
          <ListItem sx={listItemsStyles}>
            <div>Price</div>
            <span>
              {price} {currency}
            </span>
          </ListItem>
          <ListItem sx={listItemsStyles}>
            <div>Client name</div> <span>{name}</span>
          </ListItem>
          <ListItem sx={listItemsStyles}>
            <div>Client phone</div> <span>{phone}</span>
          </ListItem>
          <ListItem sx={listItemsStyles}>
            <div>Client email</div> <span>{email}</span>
          </ListItem>
          {comments && (
            <ListItem sx={listItemsStyles}>
              <div>Comments</div> <span>{comments}</span>
            </ListItem>
          )}
        </List>
      )}
      <CustomButton onClick={() => navigate("/order/2")}>
        <img
          style={{ transform: "rotate(90deg)" }}
          src={arrowImage}
          alt="image"
        />
        Back
      </CustomButton>
      <CustomButton onClick={() => setIsPopUpActive(true)}>
        Create Order
      </CustomButton>
    </form>
  );
};

export default FinishOrderPage;
