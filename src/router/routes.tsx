import LoginPage from "pages/login/index";
import OrdersPage from "pages/orders";
import Home from "pages/home";
import HelpPage from "pages/help";
import NoMatch from "pages/error/404";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "components/ProtectedRoute";
import Layout from "components/navbar";
import OrderStepsGenerator from "pages/order";

const routes = [
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
				path: "order/:id",
				element: <OrderStepsGenerator />,
			},
			{
				path: "*",
				element: <NoMatch />,
			},
		],
	},
];

const router = createBrowserRouter(routes);

export { router };
