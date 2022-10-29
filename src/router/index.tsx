import { useEffect, useState } from "react";
import { useAppDispatch } from "app/store";
import { setToken, setUserName } from "features/auth/authSlice";
import { onAuthStateChanged } from "firebaseConfig";
import { auth } from "firebaseConfig";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const CustomRouter = () => {
  const [pending, setPending] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const userName = user.email?.slice(0, 2);

        dispatch(setToken(token));
        dispatch(setUserName(userName as string));
      }
      setPending(false);
    });
  }, []);
  return <>{pending ? <>Loading...</> : <RouterProvider router={router} />}</>;
};

export default CustomRouter;
