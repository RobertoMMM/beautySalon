import CustomOrderButton from "../../../components/buttons/order";
import arrowImage from "../../../assets/dropdown.png";
import { useNavigate } from "react-router-dom";

const ClientInfoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <CustomOrderButton onClick={() => navigate("/order/1")}>
        <img
          style={{ transform: "rotate(90deg)" }}
          src={arrowImage}
          alt="image"
        />
        Back
      </CustomOrderButton>
      <CustomOrderButton onClick={() => navigate("/order/3")}>
        Next step
        <img
          style={{ transform: "rotate(-90deg)" }}
          src={arrowImage}
          alt="image"
        />
      </CustomOrderButton>
    </>
  );
};

export default ClientInfoPage;
