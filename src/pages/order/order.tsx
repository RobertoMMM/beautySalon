import NewOrderHeader from "../../components/modules/order/newOrder";
import { OrderStepsPages } from "../../ts/interfaces";

const OrderStepsGenerator = ({ details }: { details: OrderStepsPages }) => {
  const { idStep, description, content } = details;

  return (
    <>
      <NewOrderHeader idStep={idStep} description={description} />
      {content}
    </>
  );
};

export default OrderStepsGenerator;
