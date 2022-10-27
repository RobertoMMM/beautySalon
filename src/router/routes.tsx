import LoginPage from "pages/login/index";
import OrdersPage from "pages/orders/orders";
import Redirect from "components/ProtectedRoute/Redirect";
import { OrderRoutes } from "./modules/order";
import Home from "pages/home/homePage";
import HelpPage from "pages/help/helpPage";
import NoMatch from "pages/error/noMatch";

const ROUTES = [
  {
    path: "/",
    element: <Redirect to="home" />,
    isProtected: false,
  },
  {
    path: "home",
    element: <Home />,
    isProtected: false,
  },
  {
    path: "login",
    element: <LoginPage />,
    isProtected: false,
  },
  {
    path: "help",
    element: <HelpPage />,
    isProtected: false,
  },
  {
    path: "orders",
    element: <OrdersPage />,
    isProtected: true,
  },
  {
    path: "*",
    element: <NoMatch />,
    isProtected: false,
  },
  ...OrderRoutes,
];

export { ROUTES };
