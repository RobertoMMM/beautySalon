import { useNavigate } from "react-router-dom";
import CustomOrderButton from "../../../components/buttons/order";
import arrowImage from "../../../assets/dropdown.png";

const FinishOrderPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <CustomOrderButton onClick={() => navigate("/order/2")}>
        <img
          style={{ transform: "rotate(90deg)" }}
          src={arrowImage}
          alt="image"
        />
        Back
      </CustomOrderButton>
    </>
  );
};

export default FinishOrderPage;
