import ProtectedRoute from "components/ProtectedRoute";
import OrderStepsGenerator from "pages/order/order";
import ClientInfoPage from "pages/order/steps/clientInfoPage";
import FinishOrderPage from "pages/order/steps/finishOrderPage";
import SelectServicePage from "pages/order/steps/selectServicePage";

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

const OrderRoutes = stepsDetails.map((details) => {
  const stepPage = <OrderStepsGenerator details={details} />;
  return {
    path: `order/${details.idStep}`,
    element: <ProtectedRoute element={stepPage} />,
  };
});

export { stepsDetails, OrderRoutes };
