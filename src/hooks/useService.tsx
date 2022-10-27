import { useContext } from "react";
import { RegisterServices } from "context/register/RegisterServiceProvider";

const useRegisterService = () => {
  return useContext(RegisterServices);
};

export default useRegisterService;
