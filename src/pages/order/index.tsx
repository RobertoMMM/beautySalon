import NoMatch from "pages/error/404";
import { useParams } from "react-router-dom";
import NewOrderHeader from "../../components/modules/order/OrderHeaderGenerator";
import ClientInfoPage from "./steps/clientInfoPage";
import FinishOrderPage from "./steps/finishOrderPage";
import SelectServicePage from "./steps/selectServicePage";

const stepsDetails = [
  {
    idStep: 1,
    description: "Select service",
    content: <SelectServicePage />,
  },
  {
    idStep: 2,
    description: "Client Information",
    content: <ClientInfoPage />,
  },
  {
    idStep: 3,
    description: "Finish order",
    content: <FinishOrderPage />,
  },
];

const OrderStepsGenerator = () => {
  const { id } = useParams();

  const content = stepsDetails.find(
    ({ idStep }) => idStep === parseInt(id as string)
  )?.content;

  const description = stepsDetails.find(
    ({ idStep }) => idStep === parseInt(id as string)
  )?.description;

  return content && description ? (
    <>
      <NewOrderHeader id={parseInt(id as string)} description={description} />
      {content}
    </>
  ) : (
    <NoMatch />
  );
};

export default OrderStepsGenerator;
