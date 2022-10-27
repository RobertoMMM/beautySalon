import { RegisterClient } from "context/register/RegisterClientProvider";
import { useContext } from "react";

const useRegisterClient = () => {
  return useContext(RegisterClient);
};

export default useRegisterClient;
