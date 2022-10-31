import { useEffect, useState } from "react";
import { useAppDispatch } from "store";
import { setToken, setUserEmail, setUserName } from "store/slices/auth";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { getCookie } from "utils/cookie";

const CustomRouter = () => {
  const [pending, setPending] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = getCookie("userToken");

    if (data) {
      const { token, username, email } = JSON.parse(data);

      dispatch(setToken(token));

      dispatch(setUserName(username));

      dispatch(setUserEmail(email));
    }
    setPending(false);
  }, []);

  return pending ? <>Loading...</> : <RouterProvider router={router} />;
};

export default CustomRouter;
