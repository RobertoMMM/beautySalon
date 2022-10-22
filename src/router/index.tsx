import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/index";
import { ROUTES } from "./routes";
import MainProvider from "../context/MainProvider";
import Layout from "../components/layout";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <MainProvider>
        <Routes>
          <Route element={<Layout />}>
            {ROUTES.map(({ path, element, isProtected }) => {
              return isProtected ? (
                <Route
                  key={path}
                  path={`/${path}`}
                  element={<ProtectedRoute children={element} />}
                />
              ) : (
                <Route key={path} path={`/${path}`} element={element} />
              );
            })}
          </Route>
        </Routes>
      </MainProvider>
    </BrowserRouter>
  );
};

export default MainRouter;
