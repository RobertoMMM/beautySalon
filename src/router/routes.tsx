import Home from "../pages/HomePage";
import LoginPage from "../pages/login/index";
import Dashboard from "../pages/Dashboard";
import OrderPage from "../pages/orderPage/orderPage";
import NoMatch from "../pages/error/NoMatch";
import HelpPage from "../pages/help/HelpPage";
import OrdersPage from "../pages/orderPage/orders";
import Redirect from "../components/ProtectedRoute/Redirect";

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
    path: "dashboard",
    element: <Dashboard />,
    isProtected: true,
  },
  {
    path: "order",
    element: <OrderPage />,
    isProtected: true,
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
];

export { ROUTES };
