import LoginPage from "pages/login/index";
import OrdersPage from "pages/orders/orders";
import { OrderRoutes } from "./modules/order";
import Home from "pages/home/homePage";
import HelpPage from "pages/help/helpPage";
import NoMatch from "pages/error/noMatch";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "components/ProtectedRoute";
import Layout from "components/navbar";

const ROUTES = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "help",
        element: <HelpPage />,
      },
      {
        path: "orders",
        element: <ProtectedRoute element={<OrdersPage />} />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
      ...OrderRoutes,
    ],
  },
];

const router = createBrowserRouter(ROUTES);

export { router };
