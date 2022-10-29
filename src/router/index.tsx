import { useEffect, useState } from "react";
import { useAppDispatch } from "app/store";
import { setToken, setUserEmail, setUserName } from "features/auth/authSlice";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { getCookie } from "utils/cookie";
import { COOKIE_USER_DATA } from "ts/enums";

const CustomRouter = () => {
  const [pending, setPending] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = getCookie(COOKIE_USER_DATA);

    if (data) {
      const { token, username, email } = JSON.parse(data);

      dispatch(setToken(token));

      dispatch(setUserName(username));

      dispatch(setUserEmail(email));
    }
    setPending(false);
  }, []);
  return <>{pending ? <>Loading...</> : <RouterProvider router={router} />}</>;
};

export default CustomRouter;
