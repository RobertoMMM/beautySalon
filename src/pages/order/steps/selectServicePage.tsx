import arrowImage from "../../../assets/dropdown.png";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Service } from "../../../ts/interfaces";
import FormInputs from "../../../components/modules/forms/FormInputs";
import formModel from "../../../static/register/service";
import CustomButton from "../../../components/modules/button";
import { useAppDispatch } from "store";
import { setServicesInfo } from "store/slices/services";
import { LocalStorage } from "utils/localStorage";
import { LOCAL_STORAGE_SERVICES } from "constants/index";

const SelectServicePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const LocalStorageServices = LocalStorage.get(LOCAL_STORAGE_SERVICES);

  const { register, handleSubmit, control } = useForm<Service>({
    defaultValues: LocalStorageServices,
  });

  const onSubmit: SubmitHandler<Service> = (servicesInfo) => {
    if (!servicesInfo) return;

    LocalStorage.set(LOCAL_STORAGE_SERVICES, servicesInfo);

    dispatch(setServicesInfo(servicesInfo));

    navigate("/order/2");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formModel.map((element) => (
          <FormInputs
            key={element.name}
            element={element}
            register={register}
            control={control}
          />
        ))}
        <CustomButton type="submit">
          Next step
          <img
            style={{ transform: "rotate(-90deg)" }}
            src={arrowImage}
            alt="image"
          />
        </CustomButton>
      </form>
    </>
  );
};

export default SelectServicePage;
